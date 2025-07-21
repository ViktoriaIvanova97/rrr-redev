import { useMemo } from "react";

const ItemList = ({ items, search }) => {
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.includes(search));
  }, [items, search]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
