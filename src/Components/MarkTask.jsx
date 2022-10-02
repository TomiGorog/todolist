import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons'
import { markTask } from '../service/functions'
function MarkTask({task, taskList, setTaskList}) {
  const taskObj = { task, taskList, setTaskList }

  return (
    <FontAwesomeIcon 
    key={task.id}
    onClick={() => {
            markTask(taskObj)
    }}
    icon={task.ready? faSquareCheck : faSquare} className="icon"/>
  )
}

export default MarkTask