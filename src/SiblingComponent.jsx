import React from "react";
import { useState } from "react";

const SiblingComponent = () => {
	const [text, setText] = useState('The best programming course goes to ...')
	
	return (
		<>
			<h2>Текущий текст: {text}</h2>
			<button onClick={()=>{setText('REDEV')}}> Изменить текст</button>
		</>
	)
}

export default SiblingComponent