import './App.css';
import React from 'react'
import Title from './Components/Title';
import CurrentTasks from './Components/CurrentTasks';
import NumberOfTasks from './Components/NumberOfTasks';
import { AppContainer } from './Styles/Container.style';
import AddNewTask from './Components/AddNewTask';


function App() {

  const [taskList, setTaskList] = React.useState([])
  const [taskUnderEdit, setTaskUnderEdit] = React.useState(false)
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
   
    <AppContainer flexProp={taskList.length === 0? "center" : "flex-start"} >
      {/* <Title /> */}
      <NumberOfTasks taskList={taskList} />
     <AddNewTask setTaskList={setTaskList} taskList={taskList} />

<CurrentTasks setTaskList={setTaskList} taskList={taskList} setTaskUnderEdit={setTaskUnderEdit} />
    </AppContainer>

  );

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
}

export default App;
