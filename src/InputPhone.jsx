export const InputPhone = ({ register, errors }) => {
  return (
    <div>
      <input
        type="tel"
        placeholder="Phone"
        {...register("phone", { required: "Введите номер телефона" })}
      />
      <p>{errors.phone?.message}</p>
    </div>
  );
};
