import styled from 'styled-components'

export const ContentBox = styled.div`
  position: absolute;
  padding: 15px 35px;
  width: 450px;
  min-height: 250px;
  max-height: 650px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  ${(props) =>
    props.locationUs === 'registration' &&
    `
    top: 100px;
    height: 670px;
  `};
  overflow-y: auto;
  font-size: 18px;
`

export const Head = styled.div`
  text-align: center;
  font-size: 24px;
`

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  padding-left: 40px;
  height: 110px;
  input {
    font-size: 18px;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 10px;
    width: 60%;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    color: white;
    background: green;
  }
`
