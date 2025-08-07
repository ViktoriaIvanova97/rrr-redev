import { memo } from "react";

const SearchInput = ({ handleChange }) => {
  return <input type="text" onChange={handleChange} placeholder="Поиск..." />;
};

export default memo(SearchInput);
