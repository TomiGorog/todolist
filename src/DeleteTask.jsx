import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'

function DeleteTask({task, taskList, setTaskList}) {
  return (
    <FontAwesomeIcon 
    onClick={() => {
        let index = taskList.findIndex(element => {
            return element.taskName == task.taskName
        })
        let copyArray = [...taskList]
        copyArray.splice(index, 1)
        setTaskList(copyArray)
    }}
    className='icon'
    icon={faSquareMinus}/>
  )
}

export default DeleteTask