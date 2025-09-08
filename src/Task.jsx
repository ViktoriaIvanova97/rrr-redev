const Task = ({ task,deleteTask }) => {
  return (
    <div style={{display:'flex'}}>
      <input type="checkbox" />
      <p>{task.title}</p>
      <button>Изменить</button>
      <button onClick={()=>deleteTask(task.id)}>Удалить</button>
    </div>
  );
};

export default Task;
