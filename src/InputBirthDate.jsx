export const InputBirthDate = ({ register, errors }) => {
  return (
    <div>
      <input
        type="date"
        placeholder="birth Date"
        {...register("birthDate", { required: "Введите дату рождения " })}
      />
      <p>{errors.birthDate?.message}</p>
    </div>
  );
};
