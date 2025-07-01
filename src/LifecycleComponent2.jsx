import React from "react";
import { useState, useEffect } from "react";

const LifecycleComponent2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch("https://todo-redev.herokuapp.com/api/todos", {
          method: "GET",
          headers: {
            accept: " application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa3RvcmlhaXZhbm92YTk3QGV4YW1wbGUuY29tIiwiaWQiOjEwMjQsImlhdCI6MTc0NTMyOTg4M30.p2HbQaFbGzXBxxXVZ8ep30xFv3yBihn8-U16d4ffRSY",
          },
        });
        const res = await resp.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(count);
    setCount((prev) => (prev % 2 === 0 ? prev : prev + 1));
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    return () => {
      console.log("Компонент будет удалён!");
    };
  }, []);
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>++</button>
    </>
  );
};

export default LifecycleComponent2;
