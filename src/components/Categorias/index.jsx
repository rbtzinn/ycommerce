import React, { useEffect, useState } from "react"
import Sdk from "../../sdk"



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
        <div className="container-dest bg-light rounded p-3">
            <h5>Principais categorias</h5>
            {
                categories.map(c => {
                    return (
                        <span className="category" key={c.id}>
                            <h4>{c.name}</h4>
                        </span>
                    )
                })
            }
        </div>
    )
}
export default Categorias