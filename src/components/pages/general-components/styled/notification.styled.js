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
export const Block = styled.div``

export const Head2 = styled.div`
  margin: 40px 0px 10px 20px;
  font-size: 26px;
`

export const Box = styled.div`
  padding: 30px;
  max-width: 700px;
  border-radius: 5px;
  background-color: rgba(170, 170, 170, 0.3);

  div:last-child {
    margin-bottom: 0;
  }
`

export const ContentMes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 20px 30px;
  font-size: 22px;
  border-radius: 6px;
  background-color: white;
`

export const Message = styled.div`
  div {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    p {
      width: 40%;
      padding-top: 1px;
      margin-right: 7px;
    }
    span {
      flex-grow: 1;
      width: 100%;
      line-height: 25px;
    }
  }
`
export const File = styled.div`
  display: inline-flex !important;
  font-size: 16px;
  color: black;
  opacity: 0.8;
  width: 100%;
  padding: 3px;
  transition: 300ms;

  p {
    width: auto !important;
    margin: 0px !important;
  }

  :hover {
    opacity: 1;
  }
  span {
    margin: 0px 15px;
  }

  button {
    width: 230px;
    padding: 5px;
    border-radius: 4px;
    background-color: rgba(0, 115, 255, 0.6);
    color: white;
  }
`

export const ButtonsMes = styled.div`
  margin-top: 20px;
  text-align: right;
`

export const ButtonMes = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  font-weight: 700;
  opacity: 0.8;
  color: white;
  background-color: green;
  transition: 300ms;
  :hover {
    opacity: 1;
    transform: scale(1.1);
  }
`

export const CloseIcon = styled.div`
  height: 15px;
  svg {
    position: relative;
    top: -15px;
    left: 98%;
    width: 34px;
    height: 34px;
    font-size: 30px;
    color: red;
    opacity: 0.5;
    transition: 300ms;
    :hover {
      cursor: pointer;
      opacity: 1;
      transform: scale(1.1);
    }
  }
`

export const ContentNot = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 20px 30px;
  font-size: 22px;
  border-radius: 6px;
  background-color: white;
`

export const Notific = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-left: 7px;
    margin-bottom: 20px;
    font-weight: 700;
  }
  p {
    margin-bottom: 15px;
  }
  span {
    margin-bottom: 10px;
    font-size: 18px;
    font-style: italic;
  }
`
export const ButtonsDecl = styled.div`
  margin-top: 20px;
  text-align: right;
`

export const ButtonDecl = styled.button`
  margin-left: 10px;
  padding: 5px;
  border-radius: 4px;
  font-weight: 700;
  color: white;
  opacity: 0.7;
  background-color: ${(props) => (props.color === 'red' ? 'red' : 'green')};
  transition: 300ms;
  ${(props) => !props.isWaiting && `opacity: 0.4;`};
  :hover {
    opacity: 1;
    transform: scale(1.1);
  }
`
