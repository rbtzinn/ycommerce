import React, { createContext, useState, useContext } from "react";
import Notification from "../components/Notification/Notification";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [notification, setNotification] = useState(null);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setNotification("Produto adicionado ao carrinho!");
        setTimeout(() => setNotification(null), 3000);
    };

    const removeFromCart = (indexToRemove) => {
        const newCartItems = cartItems.filter((_, index) => index !== indexToRemove);
        setCartItems(newCartItems);
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