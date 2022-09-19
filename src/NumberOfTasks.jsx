import React from 'react'

function NumberOfTasks({taskList}) {

    const [totalTaskTime, setTotalTaskTime] = React.useState(0)
    console.log(totalTaskTime)
    React.useEffect(() => {
        let time = sumTasksTime(taskList)
       setTotalTaskTime(time)
    }, [taskList] )
    
  return (
    <>
    <h3>Number of tasks: {taskList.length}</h3>
    <h4 onClick={() => {
        sumTasksTime(taskList)
    }}>Required time: {totalTaskTime}</h4>
    </>
  )

  function sumTasksTime (taskList) {
    let sum = 0;
    console.log(taskList)
     taskList.forEach(task => {
        console.log(task)
        sum += Number(task.time)
    })
    console.log(sum)
   
  }
}

export default NumberOfTasks