import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  height: 70px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
`
export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0px 10px;
    position: relative;
    transition: 300ms;

    :hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
  button {
    margin: 0px 30px 0px 20px;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 5px;
    color: white;
    background-color: black;
    opacity: 0.6;
    transition: 300ms;

    :hover {
      opacity: 1;
    }
  }
  span {
    position: absolute;
    left: 45%;
    top: -10%;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    color: white;
    background: red;
    border-radius: 50%;
  }
`
export const LeftSide = styled.div`
  margin-left: 100px;
  display: flex;
  font-weight: 700;
`
