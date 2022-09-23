import React from 'react'
import { Heading3 } from './Styles/Label.style';

function NumberOfTasks({taskList}) {

    const [totalTaskTime, setTotalTaskTime] = React.useState(0)

    React.useEffect(() => {
      let sum = 0;
       taskList.forEach(task => {
          console.log(task)
          sum += Number(task.time)
      })
      setTotalTaskTime(sum)
    }, [taskList] )
    
  return (
    <>
    {taskList.length == 0? <Heading3>Your tasklist is empty</Heading3> : <Heading3>Number of tasks: {taskList.length}</Heading3>}
    {taskList.length == 0? null : <h4>Required time: {totalTaskTime} minutes</h4>}
    </>
  )

}

export default NumberOfTasks