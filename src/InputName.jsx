export const InputName = ({ register, errors }) => {
  return (
    <div>
      <input
        placeholder="Name"
        {...register("name", { required: "Введите имя " })}
      />
      <p>{errors.name?.message}</p>
    </div>
  );
};
