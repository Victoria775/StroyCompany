import styled from 'styled-components'

export const ContentBox = styled.div`
  position: absolute;
  padding: 15px 35px;
  width: 80%;
  max-width: 650px;
  height: 775px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  ${(props) =>
    props.locationUs === 'registration' &&
    `
    top: 100px;
    height: 670px;
  `};
  font-size: 18px;
`

export const Head = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-size: 24px;
  }
`

export const GorizontalBox = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    flex-basis: 45%;
  }
`

export const Input = styled.div`
  margin-top: 25px;
  p {
    text-align: left;
    color: black;
  }

  input {
    margin-top: 7px;
    padding: 8px 15px;
    width: 100%;
    font-size: 18px;
    border: 1px solid rgba(143, 143, 143, 0.3);
    border-radius: 7px;
  }
`

export const Role = styled.div`
  margin-top: 25px;
  .head {
    text-align: left;
    color: black;
  }
  .choose {
    justify-content: flex-start;
    p:first-child {
      margin-right: 30px;
    }
  }
`

export const BoxSelect = styled.div`
  margin-top: 10px;
  select {
    text-align: center;
    border: 1px solid rgba(13, 0, 255, 0.3);
    border-radius: 5px;

    option:first-child {
      color: grey;
    }
  }
`

export const BoxContract = styled.div`
  margin-top: 25px;
  p {
    margin-bottom: 7px;
    text-align: left;
    color: black;
  }
`
export const SaveBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    width: 80%;
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    color: white;
    background: green;
    opacity: 0.9;
  }
`
