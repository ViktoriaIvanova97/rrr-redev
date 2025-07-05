import React from "react";
import { useState, useEffect, useRef } from "react";
import ImageGallery from "./ImageGallery";
import Controls from "./Controls";

const MyComp = () => {
  const [state, setState] = useState([]);
  const [count, setCount] = useState(0);
  const [initial, setInitial] = useState(true);
  const [count2, setCount2] = useState(3);
  const inputRef = useRef(null);
  const [update, setUpdate] = useState(0);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://dog.ceo/api/breeds/image/random/${count2}`
      );
      const response = await res.json();
      setState(response.message);
      if (initial) {
        setInitial(false);
      } else {
        setCount((val) => val + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (count2 > 0) {
      getData();
    }
  }, [count2, update]);

	const handleInput = () => {
		const num = parseInt(inputRef.current.value);
		setCount2(num);
	}

  const handleUpdateClick = () => {
    setUpdate((val) => val + 1);
  };

  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {count} раз(-а)</p>
      <Controls
        inputRef={inputRef}
        onRefresh={handleInput}
        onUpdate={handleUpdateClick}
      />
      <ImageGallery images={state} />
    </>
  );
};

export default MyComp;
