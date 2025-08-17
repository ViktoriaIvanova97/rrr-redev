import { Box, Button, Typography } from "@mui/material";
export const ModalWindow = ({ submittedData, closeModal }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <Box>
          <Typography>Данные регистрации</Typography>
          <Typography>{JSON.stringify(submittedData, null, 2)}</Typography>
          <Button variant="contained" onClick={closeModal}>
            Закрыть
          </Button>
        </Box>
      </div>
    </div>
  );
};
