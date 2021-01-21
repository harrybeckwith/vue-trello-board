


const person = (props) => {
  return (
    <div>
      <p>
        Im {props.name} and i am {props.age} years old
      </p>
      <input onChange={props.change} value={props.name} />
      <button onClick={props.click}> delete</button>
    </div>
  );
};

export default person;
