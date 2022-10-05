import './App.css';
import React from 'react'
import CurrentTasks from './Components/CurrentTasks';
import NumberOfTasks from './Components/NumberOfTasks';
import { AppContainer } from './Styles/Container.style';
import AddNewTask from './Components/AddNewTask';
import { reUsableSorting, clearTaskList } from './service/functions';
import { ClearButton } from './Styles/Button.style'
import ClearListModal from './Components/ClearListModal'
import DevInfo from './Components/DevInfo';




function App() {

  const [taskList, setTaskList] = React.useState([])
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [clearConfirmed, setClearConfirmed] = React.useState(false)

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  React.useEffect(() => {
    clearTaskList(clearConfirmed, setClearConfirmed, setTaskList)
  }, [clearConfirmed])

  React.useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('taskList'));
    if (todos) {
      setTaskList(todos);
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(reUsableSorting(taskList)));

  }, [taskList])


  return (

    <AppContainer flexProp={taskList.length === 0 ? "center" : "flex-start"} >
      {/* <Title /> */}
      <NumberOfTasks taskList={taskList} />
      <AddNewTask setTaskList={setTaskList} taskList={taskList} />
      <CurrentTasks setTaskList={setTaskList} taskList={taskList} clearConfirmed={clearConfirmed} setClearConfirmed={setClearConfirmed} />

      <DevInfo />
      

    </AppContainer>

  );

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}

export default App;
