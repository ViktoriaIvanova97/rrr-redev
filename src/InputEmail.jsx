import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export const InputEmail = ({ register, errors }) => {
  return (
    <Box>
      <TextField
        label="email"
        variant="outlined"
        {...register("email", {
          required: "Введите email",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            message: "Введите корректный email",
          },
        })}
        helperText={errors.email?.message}
      />
    </Box>
  );
};
