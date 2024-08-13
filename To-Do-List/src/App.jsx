import { useState } from "react";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="bg-gray-300 grid py-4 h-screen">
      <ToDo />
    </div>
  );
}

export default App;
