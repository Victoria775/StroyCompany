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

export const EmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  margin-top: 20px;
  color: grey;
  font-size: 24px;
`

export const ListDoc = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  p {
    margin: 5px 0px;
    padding: 10px;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    border: 1px solid rgba(0, 176, 59, 0.3);
    :hover {
      cursor: pointer;
    }
  }
`
