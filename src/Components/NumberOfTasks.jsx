import React from 'react'
import { calculateTime } from '../service/functions';
import { H3 } from '../Styles/Fonts.style';
import { Heading3withtopPadding } from '../Styles/Label.style';

function NumberOfTasks({ taskList }) {

  const [totalTaskTime, setTotalTaskTime] = React.useState(0)

  React.useEffect(() => {
    setTotalTaskTime(calculateTime(taskList))
  }, [taskList])

  return (
    <>
      {taskList.length === 0 ? <Heading3withtopPadding>Your tasklist is empty</Heading3withtopPadding> : <Heading3withtopPadding>Number of tasks: {taskList.length}</Heading3withtopPadding>}
      {taskList.length === 0 ? null : <H3>Required time: {totalTaskTime} minutes</H3>}
    </>
  )

}

export default NumberOfTasks