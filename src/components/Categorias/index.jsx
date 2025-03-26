import React, { useEffect, useState } from "react";
import Sdk from "../../sdk";
import "./categorias.css";

const Categorias = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const api = new Sdk();
            setCategories(await api.getCategories());
        };
        fetchData();
    }, []);

    return (
        <>
            <h4>Principais categorias</h4>
            <div className="container-dest rounded p-3 categorias-container d-flex mb-4 bg-light">
                {categories.map(({ slug, icon, name }) => (
                    <a className="categoria text-dark text-decoration-none" key={slug} href={`/categories/${slug}`}>
                        <div className="img" style={{ backgroundImage: `url('${icon}')` }}></div>
                        <h4>{name}</h4>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Categorias;
