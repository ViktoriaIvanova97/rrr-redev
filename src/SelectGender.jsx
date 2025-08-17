import { MenuItem, TextField } from "@mui/material";
export const SelectedGender = ({ register, errors }) => {
  return (
    <TextField sx={{ width: '222px' }}
      label="Выберите пол"
      defaultValue=""
      select
      {...register("gender", { required: "Пожалуйста, выберите пол" })}
      helperText={errors.gender?.message}
    >
      <MenuItem value="male">Мужчина</MenuItem>
      <MenuItem value="female">Женщина</MenuItem>
    </TextField>
  );
};
