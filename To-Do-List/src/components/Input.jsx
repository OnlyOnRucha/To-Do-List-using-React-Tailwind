import React from "react";

const Input = () => {
  return (
    <div className="flex m-2 mb-4">
      <input type="text" placeholder="Add your to-do" className="border-0 p-2 rounded-l-3xl w-full pl-6 flex-1 outline-none"/>
      <button className="bg-orange-600 p-2 rounded-3xl -ml-3  px-8 text-white font-bold">+</button>
    </div>
  );
};

export default Input;
