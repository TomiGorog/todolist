import './App.css';
import React from 'react'
import Title from './Title';
import NewTaskCard from './NewTaskCard';
import CurrentTasks from './CurrentTasks';
import NumberOfTasks from './NumberOfTasks';
import EditForm from './EditForm';
import { AppContainer } from './Styles/Container.style';


export const EditContext = React.createContext()

function App() {

  const [taskList, setTaskList] = React.useState([])
  const [taskUnderEdit, setTaskUnderEdit] = React.useState(false)
  console.log(taskList)
  return (
    <AppContainer>
      <EditContext.Provider value={{taskUnderEdit, setTaskUnderEdit}}>
      <Title />
      <NumberOfTasks taskList={taskList} />

      {taskUnderEdit == false  ? <NewTaskCard setTaskList={setTaskList} taskList={taskList}/>
      :
      <EditForm setTaskList={setTaskList} taskList={taskList} />
      }
      <CurrentTasks setTaskList={setTaskList} taskList={taskList} setTaskUnderEdit={setTaskUnderEdit} />
      </EditContext.Provider>
    </AppContainer>
  );
}

export default App;
