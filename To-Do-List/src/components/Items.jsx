import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const Items = (props) => {
  return (
    <div className="flex mt-3 mx-2 gap-2 justify-between">
      <div className="flex gap-2">
        <img src={tick} alt="tick or not tick" className="w-7 h-7 cursor-pointer" />
        <h1 className="text-lg mx-2">{props.text}</h1>
      </div>
      <img
        src={delete_icon}
        alt="delete icon"
        className=" w-5 h-5 place-self-center cursor-pointer"
      />
    </div>
  );
};

export default Items;
