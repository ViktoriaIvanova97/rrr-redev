import React, {  memo } from 'react';

const UserInfo = memo(({ infoUser }) => {
  return (
    <div>
      <p>Имя: {infoUser.name}</p>
      <p>Возраст: {infoUser.age}</p>
      <p>Активен: {infoUser.isActive ? "да" : "нет"}</p>
    </div>
  );
})


export default UserInfo;
