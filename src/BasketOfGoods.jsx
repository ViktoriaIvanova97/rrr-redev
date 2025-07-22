import React from "react";
import { useState, useCallback } from "react";
import CartItem from "./CartItem";

const BasketOfGoods = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const incrementCount = (id) => {
    setCart((prev) =>
      prev.map((el) => (el.id === id ? { ...el, count: el.count + 1 } : el))
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((el) => el.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div
      style={{
        border: "2px solid #0000006b",
        borderRadius: "8%",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>Корзина товаров</h3>
      {cart.map((el) => (
        <CartItem
          el={el}
          key={el.id}
          incrementCount={incrementCount}
          removeItem={removeItem}
        />
      ))}
      <button onClick={clearCart}>Очистить корзину</button>
    </div>
  );
};

export default BasketOfGoods;
