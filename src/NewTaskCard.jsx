import React from 'react'

function NewTaskCard({ setTaskList, taskList }) {

  const [newTask, setNewTask] = React.useState(null)
  const [newTaskTime, setNewTaskTime] = React.useState(null)
  const [newTaskPriority, setNewTaskPriority] = React.useState(null)
  const [newTaskDescription, setNewTaskDescription] = React.useState(null)
  console.log(newTask, newTaskTime, newTaskPriority)
  return (
    <div>
      <label for="taskName">Task name</label>
      <input required name='taskName' onChange={(e) => {
        setNewTask(e.target.value)
      }} type="text" value={newTask} />

      <label for="taskTime">Required time in minutes?</label>
      <input required name='taskTime'
        onChange={(e) => {
          setNewTaskTime(e.target.value)
        }} type="number" value={newTaskTime} />

      <label for="taskPriority">Priority</label>
      <select required onChange={(e) => {
        setNewTaskPriority(e.target.value)
      }} type="text" value={newTaskPriority}>
        <option value="null">--Please choose an option--</option>
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>

      </select>
      <label for="taskDescription">Description of the task</label>
      <input name='taskDescription'
        onChange={(e) => {
          setNewTaskDescription(e.target.value)
        }} type="text" value={newTaskDescription} />

      <button onClick={() => {
        if (newTask != null && newTaskTime != null && newTaskPriority != null) {
          setTaskList([...taskList, { "taskName": newTask, "time": newTaskTime, "priority": newTaskPriority, "ready": false }])
          console.log(taskList)
        } else {
          window.alert("fill out empty fields")
        }
      }}>Add task</button>
    </div>
  )
}

export default NewTaskCard