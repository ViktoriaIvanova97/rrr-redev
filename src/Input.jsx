const Input = ({inputRef,changeInput}) => {
	return (
		<>
		<div style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
        <p>Показать</p>
        <input ref={inputRef}  />
        <button onClick={changeInput}>Обновить</button>
      </div>
		</>
	)
}

export default Input