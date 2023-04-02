import styled from 'styled-components'

export const AuthButtons = styled.div`
  display: flex;
  button {
    font-size: 18px;
    margin: 0px 30px;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    color: white;
    background-color: rgba(0, 85, 255, 1);
  }
`

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
`

export const InfoWindow = styled.div`
  position: absolute;
  padding: 15px 35px;
  width: 450px;
  height: 350px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  ${(props) => (props.locationUs === 'registration' && `
    top: 100px;
    height: 670px;
  `)};
`

export const ClouseIcon = styled.span`
  position: relative;
  left: 100%;
  color: red;
  background-color: none;
  :hover {
    cursor: pointer;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`

export const Head = styled.div`
  p {
    font-size: 35px;
    color: black;
    text-align: center;
  }
`
export const Input = styled.div`
  margin-top: 25px;
  p {
    text-align: left;
    font-size: 20px;
    color: black;
  }

  input {
    margin-top: 7px;
    padding: 8px 15px;
    width: 100%;
    font-size: 20px;
    border: 1px solid rgba(143, 143, 143, 0.3);
    border-radius: 7px;
  }
`

export const EnterButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin-top: 25px;
    padding: 10px 40px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 7px;
    color: white;
    background-color: green;
  }
`

export const ChooseRole = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  font-size: 16px;
  label {
    margin-left: 4px;
    :hover {
      cursor: pointer;
    }
  }
`
