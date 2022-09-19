import './App.css';
import React from 'react'
import Title from './Title';
import NewTaskCard from './NewTaskCard';
import CurrentTasks from './CurrentTasks';
import NumberOfTasks from './NumberOfTasks';
function App() {

  const [taskList, setTaskList] = React.useState([])
  console.log(taskList)
  return (
    <div className="App">
      <Title />
      <NumberOfTasks taskList={taskList} />
      <NewTaskCard setTaskList={setTaskList} taskList={taskList} />
      <CurrentTasks setTaskList={setTaskList} taskList={taskList} />
      
    </div>
  );
}

export default App;
