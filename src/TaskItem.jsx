import React, {  memo } from "react";

const TaskItem = memo(({ task }) => {
  return <li>{task}</li>;
});

export default TaskItem;
