import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Avatar = styled.div`
  margin-right: 40px;
  max-width: 250px;
  min-width: 150px;
  img {
    flex-shrink: 1;
    max-width: 100%;
    border-radius: 50%;
    border: 2px solid rgba(120, 120, 120, 0.7);
  }
`

export const Fio = styled.div`
  font-size: 30px;
`

export const TasksContainer = styled.div`
  margin: 50px 0px;
  padding: 20px;
  width: 70%;
  border-radius: 6px;
  background-color: rgba(120, 120, 120, 0.1);
`
export const HeadTasks = styled.div`
  text-align: center;
`

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 20px;
  margin: 10px 0px;
  border-radius: 6px;
  background-color: white;

  span {
    color: red;
    opacity: 0.3;
    transition: 300ms;
    :hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`

export const AddTask = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-top: 5px;
  font-size: 32px;
  color: black;
  opacity: 0.4;
  transition: 300ms;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
export const AddInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    flex-grow: 1;
  }

  input {
    padding: 10px;
    width: 98%;
    font-size: 22px;
    border-radius: 5px;
    border: 2px solid rgba(120, 120, 120, 0.6);
    background-color: white;
  }

  span {
    color: green;
    font-size: 32px;
    margin: 0px 25px;
    opacity: 0.75;
    transition: 300ms;
    :hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`
