import React from "react";
import "./TodoItem.css";
import { Checkbox } from "@material-ui/core";
import { setCheck } from "./features/todoSlice";
import { useDispatch } from "react-redux";

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        onChange={handleCheck}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done && "todoitem--done"}>{name}</p>
    </div>
  );
}

export default TodoItem;
