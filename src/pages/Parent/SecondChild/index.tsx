import "./style.css";

type SecondChildProps = {
  input: string;
  color: boolean;
};
const SecondChild = ({ input, color }: SecondChildProps) => {
  console.log("child2");
  return (
    <div
      className="secondChild"
      style={{ background: color ? "blue" : "orange" }}
    >
      <h4>{input}</h4>
    </div>
  );
};

export default SecondChild;
