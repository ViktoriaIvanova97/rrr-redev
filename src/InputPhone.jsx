import { Box, TextField } from "@mui/material";
export const InputPhone = ({ register, errors }) => {
  return (
    <Box>
      <TextField
        type="tel"
        label="Phone"
        variant="outlined"
        {...register("phone", { required: "Введите номер телефона" })}
        helperText={errors.phone?.message}
      />
    </Box>
  );
};
