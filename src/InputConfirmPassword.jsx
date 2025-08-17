import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export const InputConfirmPassword = ({ register, errors, getValues }) => {
  return (
    <Box>
      <TextField
        type="password"
        label="Confirm Password"
        variant="outlined"
        {...register("confirmPassword", {
          required: "Подтвердите пароль ",
          validate: (value) =>
            value === getValues("password") || "Пароли не совпадают",
        })}
        helperText={errors.confirmPassword?.message}
      />
    </Box>
  );
};
