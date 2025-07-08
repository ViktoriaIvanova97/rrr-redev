import React from "react";
import { useState, useEffect, useRef } from "react";
import SelectedBreed from "./SelectedBreed";
import Input from "./Input";
import ImageGallery from "./GalleryImg";

const DogsPro = () => {
  const [state, setState] = useState([]);
  const [img, setImg] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const [countBreed, setCountBreed] = useState(3);
  const isFirstRun = useRef(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dog.ceo/api/breeds/list/all`);
        const response = await res.json();
        setState(Object.keys(response.message));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getOneBreed = async () => {
      try {
        if (isFirstRun.current) {
          isFirstRun.current = false; 
          return;
        } else if (selectedBreed === "all" || selectedBreed === "") {
          const res = await fetch(
            `https://dog.ceo/api/breeds/image/random/${countBreed}`
          );
          const response = await res.json();
          setImg(response.message);
          setCount((prev) => prev + 1);
          console.log("all");
        } else {
          const res = await fetch(
            `https://dog.ceo/api/breed/${selectedBreed}/images/random/${countBreed}`
          );
          const response = await res.json();
          setImg(response.message);
          setCount((prev) => prev + 1);
          console.log("some");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOneBreed();
  }, [selectedBreed, countBreed]);

  const changeBreed = (e) => {
    setSelectedBreed(e.target.value);
    setImg([]);
  };

  const changeInput = () => {
    const num = parseInt(inputRef.current.value);
    setCountBreed(num);
  };

  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {count} раз(а)</p>
      <SelectedBreed
        state={state}
        selectedBreed={selectedBreed}
        changeBreed={changeBreed}
      />
      <Input inputRef={inputRef} changeInput={changeInput} />
      <ImageGallery img={img} selectedBreed={selectedBreed} />
    </>
  );
};

export default DogsPro;
