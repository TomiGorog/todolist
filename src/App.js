import './App.css';
import React from 'react'
import Title from './Components/Title';
import NewTaskCard from './Components/NewTaskCard'
import CurrentTasks from './Components/CurrentTasks';
import NumberOfTasks from './Components/NumberOfTasks';
import EditForm from './Components/EditForm';
import { AppContainer } from './Styles/Container.style';
import AddNewTask from './Components/AddNewTask';


export const EditContext = React.createContext()
function App() {

  const [taskList, setTaskList] = React.useState([])
  const [taskUnderEdit, setTaskUnderEdit] = React.useState(false)
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  console.log(windowSize)
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
   
    <AppContainer >
      <EditContext.Provider value={{taskUnderEdit, setTaskUnderEdit}}>
      {/* <Title /> */}
      <NumberOfTasks taskList={taskList} />
     <AddNewTask setTaskList={setTaskList} taskList={taskList} />

      {/* { !taskUnderEdit? <NewTaskCard setTaskList={setTaskList} taskList={taskList} />
      :  taskUnderEdit?
       <EditForm setTaskList={setTaskList} taskList={taskList}  />
        :null
       } */}
<CurrentTasks setTaskList={setTaskList} taskList={taskList} setTaskUnderEdit={setTaskUnderEdit} />
      </EditContext.Provider>
    </AppContainer>

  );

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
}

export default App;
