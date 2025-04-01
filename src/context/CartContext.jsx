import React, { createContext, useState, useContext } from "react";
import Notification from "../components/Notification/Notification";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [notification, setNotification] = useState(null);

    const addToCart = (product) => {
        setCartItems((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantidade: (item.quantidade || 1) + 1 } : item
                );
            }

            return [...prevCart, { ...product, quantidade: 1 }];
        });

        setNotification("Produto adicionado ao carrinho!");
        setTimeout(() => setNotification(null), 3000);
    };


    const removeFromCart = (productId) => {
        setCartItems((prevCart) => {
            return prevCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                .filter((item) => item.quantidade > 0);
        });

        setNotification("Produto removido do carrinho!");
        setTimeout(() => setNotification(null), 3000);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
            {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);