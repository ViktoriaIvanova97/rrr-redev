export const InputConfirmPassword = ({ register, errors ,getValues}) => {
  return (
    <div>
      <input
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword", {
          required: "Подтвердите пароль ",
          validate: (value) =>
            value === getValues("password") || "Пароли не совпадают",
        })}
      />
      <p>{errors.confirmPassword?.message}</p>
    </div>
  );
};
