import React from "react";
import "./style.css";

type FirstChildProps = {
  setInput: React.ChangeEventHandler<HTMLInputElement>;
  setColor: React.MouseEventHandler<HTMLButtonElement>;
};

const FirstChild = ({ setInput, setColor }: FirstChildProps) => {
  console.log("child1");
  return (
    <div className="childOne">
      <button className="childOne__button" onClick={setColor}>
        Change Color
      </button>
      <input className="childOne__input" onChange={setInput}></input>
    </div>
  );
};

export default FirstChild;
