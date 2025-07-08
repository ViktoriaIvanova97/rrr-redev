

const SelectedBreed = ({state,selectedBreed,changeBreed}) => {
	return (
		<>
		<div style={{ display: "flex", alignItems: "center" }}>
        <p>Порода</p>
        <select value={selectedBreed} onChange={changeBreed}>
          <option value="all" >Все породы</option>
          {state.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
		</>
	)
}

export default SelectedBreed