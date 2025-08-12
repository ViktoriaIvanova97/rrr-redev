export const InputEmail = ({ register, errors }) => {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Введите email",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            message: "Введите корректный email",
          },
        })}
      />
      <p>{errors.email?.message}</p>
    </div>
  );
};
