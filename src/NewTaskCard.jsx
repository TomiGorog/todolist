import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Button } from './Styles/Button.style';
import { FormContainer, MainInputDiv } from './Styles/Container.style';
import { MainInput, MainLabel } from './Styles/Label.style';

function NewTaskCard({ setTaskList, taskList }) {
  const [newTaskName, setNewTaskName] = React.useState('')
  const [newTaskTime, setNewTaskTime] = React.useState('')
  const [newTaskPriority, setNewTaskPriority] = React.useState('')
  const [newTaskDescription, setNewTaskDescription] = React.useState('')
  const [newTaskReady, setNewTaskReady] = React.useState(false)

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setNewTaskName('')
    setNewTaskTime('')
    setNewTaskPriority('')
    setNewTaskDescription('')
    setNewTaskReady(false)
  };
  
  return (
    <FormContainer onSubmit={handleSubmit}>
      <MainInputDiv>

      <MainLabel for="taskName">Task name</MainLabel>
      <MainInput required name='taskName' onChange={(e) => {
        setNewTaskName(e.target.value)
      }} type="text" value={newTaskName} />
      </MainInputDiv>

      <label for="taskTime">Required time in minutes?</label>
      <input required name='taskTime'
        onChange={(e) => {
          setNewTaskTime(e.target.value)
        }} type="number" value={newTaskTime} />

      <label for="taskPriority">Priority</label>
      <select required onChange={(e) => {
        setNewTaskPriority(e.target.value)
      }} type="text" value={newTaskPriority}>
        <option value={undefined}>--Please choose an option--</option>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>

      </select>
      <label for="taskDescription">Description of the task</label>
      <textarea name='taskDescription'
        onChange={(e) => {
          setNewTaskDescription(e.target.value)
          console.log(newTaskDescription)
        }} type="text" value={newTaskDescription} />

      <Button backgroundColor={"#f2ce3e"}

        type="submit" onClick={() => {
          if (newTaskName != '' && newTaskTime != '' && newTaskPriority != '') {
            setTaskList([...taskList, { "taskName": newTaskName, "time": newTaskTime, "priority": newTaskPriority, "description": newTaskDescription, "ready": newTaskReady, "id": uuidv4() }])

          } else {
            window.alert("fill out empty fields")
          }
        }}>Add task</Button>

    </FormContainer>
  )
}

export default NewTaskCard