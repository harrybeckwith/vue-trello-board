const ValidationComponent = (props) => {
  return (
    <div>{props.msg.length > 5 ? "text long enough" : "text to short"}</div>
  );
};

export default ValidationComponent;
