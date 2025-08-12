export const SelectedGender = ({ register, errors }) => {
  return (
    <div>
      <select {...register("gender", { required: "Пожалуйста, выберите пол" })}>
        <option value="">Выберите пол</option>
        <option value="male">Мужчина</option>
        <option value="female">Женщина</option>
      </select>
      <p>{errors.gender?.message}</p>
    </div>
  );
};
