import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons'
function MarkTask({task, taskList, setTaskList}) {
  return (
    <FontAwesomeIcon 
    key={task}
    onClick={() => {
            console.log(task)
            let index = taskList.findIndex((element) => {
                console.log(element)
               return element.taskName == task.taskName
            })
            console.log(task)
            let copyArray = [...taskList]
            console.log(copyArray)
            copyArray.splice(index, 1, {
            "taskName": task.taskName, 
            "time": task.time, 
            "priority": task.priority, 
            "description": task.description,
            "ready": !task.ready
          })
            setTaskList(copyArray)
    }}
    icon={task.ready? faSquareCheck : faSquare} className="tickbox"/>
  )
}

export default MarkTask