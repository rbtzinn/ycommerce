
import React, { useEffect, useState } from "react"
import Sdk from "../../sdk"
import './categorias.css'


const Categorias = () => {

    const [categories, setCategories] = useState([]);

    const main = () => {

        useEffect(() => {


            const fetchData = async () => {
                const api = new Sdk();
                let active = ' active'
                setCategories(await api.getCategories())

            }

            fetchData()
        }, [])
    }
    main()

    return (
        <>
            <div className="container my-4 bg-white rounded p-3">
            <h4>Principais categorias</h4>
                <div className="d-flex mt-3">
                {categories.map(({ slug, icon, name }) => (
                    <a className="categoria text-dark text-decoration-none" key={slug} href={`/categories/${slug}`}>
                        <div className="img" style={{ backgroundImage: `url('${icon}')` }}></div>
                        <h4>{name}</h4>
                    </a>
                ))}
                </div>
            </div>
        </>
    );
};

export default Categorias;
