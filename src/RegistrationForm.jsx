import { useForm } from "react-hook-form";
import { useState } from "react";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [submittedData, setSubmittedData] = useState(null);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    setSubmittedData(data);
    setMessage("Успешно зарегистрировано");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="Name"
            {...register("name", { required: "Введите имя " })}
          />
          <p>{errors.name?.message}</p>
        </div>

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

        <div>
          <input
            type="date"
            placeholder="birth Date"
            {...register("birthDate", { required: "Введите дату рождения " })}
          />
          <p>{errors.birthDate?.message}</p>
        </div>

        <div>
          <select
            {...register("gender", { required: "Пожалуйста, выберите пол" })}
          >
            <option value="">Выберите пол</option>
            <option value="male">Мужчина</option>
            <option value="female">Женщина</option>
          </select>
          <p>{errors.gender?.message}</p>
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone", { required: "Введите номер телефона" })}
          />
          <p>{errors.phone?.message}</p>
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            <h2>Данные регистрации</h2>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}

      {message && <h2>{message}</h2>}
    </div>
  );
};
