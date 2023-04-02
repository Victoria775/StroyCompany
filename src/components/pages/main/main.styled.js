import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  font-size: 24px;
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
`

export const LeftBar = styled.div`
  font-weight: 700;
`
export const CenterBar = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
`
export const RightBar = styled.div``

export const Header = styled.div`
  margin: 100px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LeftHead = styled.div`
  flex-grow: 1;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
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
`
export const RightHead = styled.div`
  flex-grow: 1;
  margin-left: 50px;
  img {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    max-width: 1000px;
  }
`
