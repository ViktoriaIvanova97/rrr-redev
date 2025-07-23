import React, { memo } from "react";

const CartItem = memo(({ el, incrementCount, removeItem }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
      }}
    >
      <p>
        {el.title} (Кол-во : {el.count})
      </p>
      <button
        onClick={() => {
          incrementCount(el.id);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          removeItem(el.id);
        }}
      >
        Удалить
      </button>
    </div>
  );
}, (prevProps, nextProps) => {
	return prevProps.el.count === nextProps.el.count
});

export default CartItem;
