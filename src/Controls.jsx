import React, { useState, useEffect, useRef } from "react";


const Controls = ({ inputRef, onUpdate, onRefresh }) => {
	return (
	  <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
		<p>Показать</p>
		<input ref={inputRef} />
		<button onClick={() => { onRefresh(); onUpdate(); }}>Обновить</button>
	  </div>
	);
};
  
export default Controls