export const InputPassword = ({ register, errors }) => {
  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Введите пароль ",
          minLength: {
            value: 6,
            message: "Пароль должен содержать не менее 6 символов",
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
            message: "Пароль должен содержать хотя бы одну заглавную букву",
          },
        })}
      />
      <p>{errors.password?.message}</p>
    </div>
  );
};
