import styled from "styled-components";

const StyledDiv = styled.div`
  @media (max-width: 500px) : {
    backgroundcolor: "blue";
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
      <p>
        Im {props.name} and i am {props.age} years old
      </p>
      <input onChange={props.change} value={props.name} />
      <button onClick={props.click}> delete</button>
    </StyledDiv>
  );
};

export default person;
