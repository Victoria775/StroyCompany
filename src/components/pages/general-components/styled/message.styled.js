import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 20px;
  border-radius: 8px;
  max-width: 1000px;
  background-color: rgba(170, 170, 170, 0.1);
`
export const TextInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Input = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
  input {
    width: 98%;
    padding: 7px 7px 7px 15px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid rgba(120, 120, 120, 0.5);
  }
`
export const DropdownUsersList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 39px;
  width: 98%;
  height: 200px;
  overflow: hidden;
  overflow-y: auto;
  margin-left: 2%;
  font-size: 18px;
  border: 2px solid rgba(102, 153, 255, 0.7);
  border-radius: 5px;
  background-color: white;
`

export const BackgroundDrop = styled.div`
  height: 100%;
  background-color: rgba(168, 226, 255, 0.2);
`

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 3px 0px;
  padding: 5px 15px;
  text-align: left;
  :hover {
    cursor: pointer;
    background-color: rgba(135, 206, 250, 0.4);
  }

  p:first-child {
    margin: 5px 15px 5px 0px;
  }
  p:nth-child(2) {
    font-size: 16px;
  }
`

export const TextTextarea = styled.div`
  display: flex;
  margin-top: 50px;
  div {
    flex-grow: 1;
    text-align: right;
  }
  textarea {
    resize: none;
    width: 97%;
    height: 100px;
    padding: 5px;
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid rgba(120, 120, 120, 0.5);
  }
`
export const File = styled.div`
  margin-top: 40px;
  div {
    display: flex;
    align-items: center;
    input{
      width: min-content;
    }
    span {
      color: red;
      opacity: 0.5;
      font-size: 18px;
      transition: 300ms;
      :hover{
        cursor: pointer;
        opacity: 1.0;
        transform: scale(1.1);
      }
    }
  }
`
export const EnterButton = styled.div`
  margin-top: 40px;
  text-align: right;
  button {
    padding: 20px 50px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 7px;
    color: white;
    background-color: green;
    transition: 300ms;

    :hover {
      transform: scale(1.1);
    }
  }
`
