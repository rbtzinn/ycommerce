import React from "react";
import { useParams } from "react-router-dom";
import ProductReview from "../../pages/ProductReview";

const produtos = [
    { id: 1, nome: "Produto 1", descricao: "Sapato Nike branco", imagem: "/images/produto1.jpg" },
    { id: 2, nome: "Produto 2", descricao: "Descrição do produto 2", imagem: "/images/produto2.jpg" },
    { id: 3, nome: "Produto 3", descricao: "Descrição do produto 3", imagem: "/images/produto3.jpg" },
    { id: 4, nome: "Produto 4", descricao: "Descrição do produto 4", imagem: "/images/produto4.jpg" },
    { id: 5, nome: "Produto 5", descricao: "Descrição do produto 5", imagem: "/images/produto5.jpg" },
    { id: 6, nome: "Produto 6", descricao: "Descrição do produto 6", imagem: "/images/produto6.jpg" },
];

const Reviews = () => {
    const { id } = useParams();
    const produto = produtos.find((p) => p.id === parseInt(id));

    if (!produto) {
        return <h2>Produto não encontrado!</h2>;
    }

    return (
        <div>
            <ProductReview produto={produto} />
        </div>
    );
};

export default Reviews;
