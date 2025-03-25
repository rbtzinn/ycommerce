import React, { useEffect, useState } from "react"
import Sdk from "../../sdk"
import './categorias.css'


const Categorias = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const api = new Sdk();
            setCategories(await api.getCategories())

        }
        fetchData()
    })
    return (
        <>
            <h5>Principais categorias</h5>
            <div className="container-dest   rounded p-3 categorias-container">

                {
                    categories.map(c => {
                        return (

                            <a className="categoria" key={`${c.id}`} href={`/categories/${c.slug}`}>
                                <>
                                    <div className="img" style={{ backgroundImage: `url('${c.icon}')` }}></div>
                                </>
                                <h4>{c.name}</h4>
                            </a>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Categorias