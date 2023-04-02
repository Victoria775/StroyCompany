import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0px;
`
export const Head = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 26px;
`
export const TextInput = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 494px;
  input {
    padding: 7px 7px 7px 15px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid rgba(120, 120, 120, 0.5);
  }
`
export const RequestBox = styled.div`
  padding: 40px;
  max-width: 900px;
  border-radius: 8px;
  background-color: rgba(170, 170, 170, 0.1);
`
export const Comment = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 2px;
  }
  div {
    flex-grow: 1;
    text-align: right;
  }
  textarea {
    width: 90%;
    height: 100px;
    padding: 5px;
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid rgba(120, 120, 120, 0.5);
  }
`

export const EnterButton = styled.div`
  margin-top: 40px;
  button {
    padding: 15px;
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
