import './App.css';
import React from 'react'
import Title from './Title';
import NewTaskCard from './NewTaskCard';
import CurrentTasks from './CurrentTasks';
import NumberOfTasks from './NumberOfTasks';
import EditForm from './EditForm';
import { AppContainer } from './Styles/Container.style';
import AddNewTask from './AddNewTask';


export const EditContext = React.createContext()

function App() {

  const [taskList, setTaskList] = React.useState([])
  const [taskUnderEdit, setTaskUnderEdit] = React.useState(false)
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [addNewTask, setAddNewTask] = React.useState(false)
  console.log(windowSize)
console.log(addNewTask)
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
    <AppContainer>
      <EditContext.Provider value={{taskUnderEdit, setTaskUnderEdit, setAddNewTask}}>
      {/* <Title /> */}
      <NumberOfTasks taskList={taskList} />
      {windowSize.innerWidth <= 768 && !taskUnderEdit && <AddNewTask addNewTask={addNewTask} setAddNewTask={setAddNewTask} />}

      { (windowSize.innerWidth >= 768 || addNewTask) && !taskUnderEdit? <NewTaskCard setTaskList={setTaskList} taskList={taskList} addNewTask={addNewTask} setAddNewTask={setAddNewTask}/>
      :  taskUnderEdit && !addNewTask?
       <EditForm setTaskList={setTaskList} taskList={taskList}  setAddNewTask={setAddNewTask} />
        :null
       }
      
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
