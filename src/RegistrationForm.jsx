import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { InputName } from "./InputName";
import { ModalWindow } from "./ModalWindow";
import { InputEmail } from "./InputEmail";
import { InputPassword } from "./InputPassword";
import { InputConfirmPassword } from "./InputConfirmPassword";
import { InputBirthDate } from "./InputBirthDate";
import { SelectedGender } from "./SelectGender";
import { InputPhone } from "./InputPhone";

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
        <InputName register={register} errors={errors} />
        <InputEmail register={register} errors={errors} />
        <InputPassword register={register} errors={errors} />
        <InputConfirmPassword register={register} errors={errors} getValues={getValues} />
        <InputBirthDate register={register} errors={errors} />
        <SelectedGender register={register} errors={errors} />
        <InputPhone register={register} errors={errors} />

        <button type="submit">Зарегистрироваться</button>
      </form>

      {showModal && (<ModalWindow submittedData={submittedData} closeModal={closeModal} />)}
      {message && <h2>{message}</h2>}
    </div>
  );
};
