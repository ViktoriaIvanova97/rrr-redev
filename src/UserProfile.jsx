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
    <>
      <div>
        <p>{user.name}</p>
        <button onClick={changeName}>Сменить имя</button>
      </div>
      <div>
        <p>{user.age}</p>
        <button onClick={changeAge}>Увеличить возраст</button>
      </div>
      <div>
        <p>{JSON.stringify(user)}</p>
        <button onClick={changeActive}>Переключить активность</button>
      </div>
    </>
  );
};

export default UserProfile;
