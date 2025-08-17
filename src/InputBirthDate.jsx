import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export const InputBirthDate = ({ register, errors }) => {
  return (
    <Box sx={{ width: '222px' }}>
      <TextField
        type="date"
        variant="outlined"
        fullWidth
        {...register("birthDate", { required: "Введите дату рождения " })}
        helperText={errors.birthDate?.message}
      />
    </Box>
  );
};
