import styled from 'styled-components'

export const Box = styled.div`
  margin: 20px 0px;
  padding: 10px;
  border-radius: 7px;
  background-color: white;
  transition: 300ms;

  :hover {
    transform: scale(1.013);
  }

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Arrow = styled.span`
  transition: 300ms;
  ${(props) => props.isOpen && `rotate: 180deg`}
`

export const InfoPerson = styled.div`
  :hover {
    cursor: pointer;
  }
`
export const DopInfo = styled.div``

export const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center !important;
  align-items: flex-start !important;
  margin-top: 10px;
  font-size: 18px;

  .headerInfo {
    text-decoration: underline;
    text-align: center;
  }
`

export const InfoBlock = styled.div`
  margin: 10px 20px 0px 10px;
  width: 250px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 10px;
  border-radius: 7px;
  background-color: rgba(143, 233, 247, 0.5);
  height: 100%;

  div {
    display: flex;
    align-items: center;
    margin: 5px 0px;
    width: 100%;

    p {
      flex-grow: 1;
    }

    b {
      margin-left: 7px;
      color: black;
      opacity: 0.6;
      transition: 300ms;
      :hover {
        transform: scale(1.15);
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`
export const TimeInput = styled.div`
  width: 50% !important;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-top: 3px;

  input {
    width: 60%;
    margin-right: 5px;
    font-size: 18px;
  }

  b {
    padding-top: 2px;
    color: green !important;
    transform: scale(1.2);
    :hover {
      transform: scale(1.3) !important;
    }
  }
`

export const InfoBlock2 = styled(InfoBlock)`
  margin: 10px 20px 0px 10px;
  div {
    flex-direction: column;
    p {
      margin-bottom: 10px;
    }
  }
`

export const InfoBlock3 = styled(InfoBlock)`
  margin: 10px 20px 0px 10px;
  display: flex;
  flex-direction: column;
  div {
    flex-direction: column;
    p {
      margin: 5px;
      width: 100%;
    }
  }
`

export const DeleteBox = styled.div`
  margin: 15px 0px 0px 10px;
  width: max-content;

  button {
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 700;
    color: white;
    background-color: rgba(255, 133, 133, 1);
    opacity: 0.5;
    transition: 300ms;

    :hover {
      transform: scale(1.06);
      opacity: 1;
    }
  }
`

export const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
export const ContractBox = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-between;
`
export const DocumentsButton = styled.div`
  display: flex;
  button {
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: 700;
    color: white;
    background-color: ${(props) => `${props.color}`};
    opacity: 0.4;
    transition: 300ms;
    height: 27px;

    :hover {
      transform: scale(1.06);
      opacity: 1;
    }
  }
`
