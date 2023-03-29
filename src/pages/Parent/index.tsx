import FirstChild from "./FirstChild/index";
import SecondChild from "./SecondChild/index";
import "./style.css";
import useInputHook from "../../hooks/useInputHook";

const Parent = () => {
  const { input, handleInputChange, color, handleButtonClick } = useInputHook();
  console.log("parent");
  return (
    <div className="parent">
      <FirstChild setInput={handleInputChange} setColor={handleButtonClick} />
      <SecondChild input={input} color={color} />
    </div>
  );
};

export default Parent;
