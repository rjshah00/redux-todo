import React from "react";
import "./App.css";
import Input from "./Input.js";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectedTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectedTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todocontainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
