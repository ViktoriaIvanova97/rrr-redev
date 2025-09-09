import { useContext } from "react";
import { Context } from "./Contex";

const SortTask = () => {
  const { setSortOrder } = useContext(Context);

  return (
    <div style={{ marginBottom: "10px" }}>
      <button
        onClick={() => setSortOrder("desc")}
        // disabled={sortOrder === "desc"}
      >
        Новые сверху
      </button>
      <button
        onClick={() => setSortOrder("asc")}
        // disabled={sortOrder === "asc"}
        style={{ marginLeft: "5px" }}
      >
        Новые снизу
      </button>
    </div>
  );
};

export default SortTask;
