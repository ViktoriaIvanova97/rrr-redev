import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export const InputName = ({ register, errors }) => {
  return (
    <Box>
      <TextField
        label="Name"
        variant="outlined"
        {...register("name", { required: "Введите имя " })}
        helperText={errors.name?.message}
      />
    </Box>
  );
};
