import "./CharComponent.css";
const CharComponent = (props) => {
  const style = {
    border: "1px solid black",
  };
  return (
    <div style={style} className="CharComponent" onClick={props.click}>
      {props.char}
    </div>
  );
};
export default CharComponent;
