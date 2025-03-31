import React, { useEffect, useState } from "react";
import Sdk from "../../sdk";
import './lojasPrincipais.css'; // Criaremos este CSS similar ao das categorias

const LojasPrincipais = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const api = new Sdk();
            const storesData = await api.getStores();
            setStores(storesData);
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="container my-4 bg-white rounded p-3">
            <h4>Lojas principais</h4>
                {stores.map(({ id, logo, name }) => (
                    <a className="loja text-dark text-decoration-none" key={id} href={`/loja/${id}`}>
                        <div className="img" style={{ backgroundImage: `url('${logo}')` }}></div>
                        <h4>{name}</h4>
                    </a>
                ))}
            </div>
        </>
    );
};

export default LojasPrincipais;