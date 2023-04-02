import styled from 'styled-components'

export const Box = styled.div`
  max-width: 400px;
  min-width: 250px;
  width: 20%;
  padding: 30px 30px 25px 30px;
  font-weight: 700;
  color: black;
  background-color: rgba(211, 211, 211, 0.2);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
`

export const CheckText = styled.p`
  padding: 20px 10px;
  margin: 5px 0px;
  color: rgba(80, 80, 80, 1);
  transition: 300ms;

  ${(props) =>
    props.checked === true &&
    `border-radius: 5px;
    color: blue;
    background-color: rgba(135, 206, 250, 0.3);`};

  :hover {
    cursor: pointer;
    border-radius: 5px;
    color: rgba(0, 0, 255, 0.7);
    background-color: rgba(135, 206, 250, 0.3);
  }
`
