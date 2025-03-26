import React, { createContext, useState, useContext } from "react";
import Notification from "../components/Notification/Notification";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [notification, setNotification] = useState(null);

    const addToCart = () => {
        setCartCount(cartCount + 1);
        setNotification("Produto adicionado ao carrinho!");

        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
            {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
