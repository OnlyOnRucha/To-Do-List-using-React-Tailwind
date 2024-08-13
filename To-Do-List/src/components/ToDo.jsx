import React from "react";
import Items from "./Items";
import todo_icon from "../assets/todo_icon.png";
import Input from "./Input";

const ToDo = () => {
  return (
    <div className="bg-slate-100 flex flex-col min-h-96 w-11/12 place-self-center max-w-96 rounded-2xl p-8 shadow-2xl">
      <div className="flex gap-4 m-2 pb-2">
        <img src={todo_icon} alt="todo_icon" className="w-8" />
        <h1 className="text-2xl font-medium">To-Do List</h1>
      </div>

      <div>
        <Input />
        <Items text = "henlo"/>
        <Items text = "tata" />
      </div>
    </div>
  );
};

export default ToDo;
