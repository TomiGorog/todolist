import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'

function EditTask({task, taskList, setTaskList}) {

  return (
    <FontAwesomeIcon 
    onClick={() => {
        let edittedTask = window.prompt("Edit task")
        let index = taskList.findIndex(element => {
            return element.taskName == task.taskName
        })
        console.log(index)
        let copyArray = [...taskList]
        copyArray.splice(index, 1, {
          "taskName": edittedTask, 
          "time": task.time, 
          "priority": task.priority, 
          "description": task.description,
          "ready": !task.ready
        } )
        setTaskList(copyArray)
    }}
    className='tickbox'
    icon={faSquarePen}/>
  )
}

export default EditTask