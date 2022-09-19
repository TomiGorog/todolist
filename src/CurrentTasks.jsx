import React from 'react'
import DeleteTask from './DeleteTask'
import EditTask from './EditTask'

import MarkTask from './MarkTask'

function CurrentTasks({ taskList, setTaskList }) {
    console.log(taskList)
    return (
        <div>{taskList.map((task) => {
            console.log(task)
            return (
                <div className='task'>

                    <h2
                    key={task.task} >{task.taskName}</h2>
                    <p>{task.time} minutes  {task.priority} priority</p>
                    <div className='icons'>

                    <MarkTask task={task} taskList={taskList} setTaskList={setTaskList}/>
                    <EditTask task={task} taskList={taskList} setTaskList={setTaskList}/>
                    <DeleteTask task={task} taskList={taskList} setTaskList={setTaskList}/>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default CurrentTasks