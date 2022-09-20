import React from 'react'

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
    {taskList.length == 0? <h3>Your tasklist is empty</h3> : <h3>Number of tasks: {taskList.length}</h3>}
    {taskList.length == 0? null : <h4>Required time: {totalTaskTime}</h4>}
    </>
  )

}

export default NumberOfTasks