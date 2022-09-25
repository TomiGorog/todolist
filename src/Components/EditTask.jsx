import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'
import { EditContext } from '../App'

function EditTask({task, taskList, setTaskList}) {
  let editContext = React.useContext(EditContext)
  console.log(editContext.taskUnderEdit)
  return (
    <FontAwesomeIcon 
    onClick={() => {
        editContext.setTaskUnderEdit(task)
        editContext.setAddNewTask(false)
    }}
    className='icon'
    icon={faSquarePen}/>
  )
}

export default EditTask