export const ModalWindow = ({ submittedData, closeModal }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2>Данные регистрации</h2>
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        <button onClick={closeModal}>Закрыть</button>
      </div>
    </div>
  );
};
