import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  font-size: 24px;
  overflow-x: hidden;
`

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  background-color: rgba(140, 140, 140, 0.1);
  p {
    margin: 0px 10px;
  }
  @media (max-width: 700px) {
    display: block;
    padding: 20px 10px;
    margin: 0px;
  }
`

export const LeftBar = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Bar1 = styled.div`
  font-weight: 700;
  margin-left: 10%;
  @media (max-width: 700px) {
    margin-left: 0;
  }
`
export const Bar2 = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-right: 10%;
  font-size: 20px;
  p {
    padding: 8px;
    border-radius: 5px;
    transition: 300ms;
    :hover {
      cursor: pointer;
      color: rgba(102, 0, 255, 1);
      background-color: white;
    }
  }
  @media (max-width: 700px) {
    margin-right: 0;
    margin-top: 10px;
  }
`

export const RightBar = styled.div`
  flex-basis: 300px;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
`

export const Header = styled.div`
  margin: 100px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 50px 0px;
  }
`

export const LeftHead = styled.div`
  flex-grow: 1;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 15%;
  text-align: left;

  p {
    margin: 0px 0px 30px 0px;
    font-size: 70px;
    font-weight: 700;
    color: black;
  }
  p:nth-child(2) {
    width: 400px;
    font-size: 30px;
    color: rgba(85, 0, 255, 0.7);
  }

  @media (max-width: 700px) {
    width: 100%;
    margin: 30px 0px 50px 0px;
  }
`
export const RightHead = styled.div`
  flex-shrink: 1;
  margin-left: 10%;
  width: 100%;
  img {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    max-width: 1000px;
  }
  @media (max-width: 700px) {
    margin: 0px;
    img {
      max-width: 700px;
      border-radius: 0px;
    }
  }
`
