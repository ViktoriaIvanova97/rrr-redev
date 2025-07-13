import React from "react";
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeName = () => {
    setUser((prev) => ({
      ...prev,
      name: prev.name === "Иван" ? "Петя" : "Иван",
    }));
  };

  const changeAge = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  const changeActive = () => {
    setUser((prev) => ({ ...prev, isActive: !prev.isActive }));
  };

  return (
    <div
      style={{
        border: "2px solid #0000006b",
        borderRadius: "8%",
        padding: "10px",
        margin: "10px",
        display: "grid",
        justifyItems: "center",
      }}
    >
      <h3>Профиль пользователя</h3>
      <div>
        <p>Имя: {user.name}</p>
        <p>Врзраст: {user.age}</p>
        <p>Активен: {user.isActive ? "да" : "нет"}</p>
      </div>
      <div style={{ display: "grid", gap: "10px" }}>
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={changeAge}>Увеличить возраст</button>
        <button onClick={changeActive}>Переключить активность</button>
      </div>
    </div>
  );
};

export default UserProfile;
