import React from "react";
import { useState } from "react";

const useInputHook = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    setColor((color: boolean) => !color);
  };

  return { input, handleInputChange, color, handleButtonClick };
};
export default useInputHook;
