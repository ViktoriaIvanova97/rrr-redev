import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export const InputPassword = ({ register, errors }) => {
  return (
    <Box>
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        {...register("password", {
          required: "Введите пароль ",
          minLength: {
            value: 6,
            message: "Пароль должен содержать не менее 6 символов",
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
            message: "Пароль должен содержать хотя бы одну заглавную букву",
          },
        })}
        helperText={errors.password?.message}
      />
    </Box>
  );
};
