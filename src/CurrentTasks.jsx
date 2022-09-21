import React from 'react'
import DeleteTask from './DeleteTask'
import EditTask from './EditTask'

import MarkTask from './MarkTask'

function CurrentTasks({ taskList, setTaskList, }) {
    
    React.useEffect(() => {
        const order = taskList.sort((a, b) => {
            if(a.priority == "low" && (b.priority == "normal" || b.priority == "high")) {
                return 1
            } else if (a.priority == "normal" && b.priority == "high") {
                return 1
            } else if (a.priority == "high" && (b.priority == "normal" || b.priority == "low")) {
                return -1
            } else if (a.priority == "normal" && b.priority == "low") {
                return -1
            } else {
                return 0
            }
        })
        console.log(order)
    }, [taskList])
    return (
        <div>{taskList.map((task) => {
            let threeWordsIntro = task.description.split(' ').slice(0, 3).join(' ')
            return (
                <div className='task'>

                    <h2
                    key={task.task} >{task.taskName}</h2>
                    <p>{task.time} minutes  {task.priority} priority {threeWordsIntro} 
</p>
                    <div className='icons'>

                    <MarkTask task={task} taskList={taskList} setTaskList={setTaskList}/>
                    <EditTask task={task} taskList={taskList} setTaskList={setTaskList} />
                    <DeleteTask task={task} taskList={taskList} setTaskList={setTaskList}/>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default CurrentTasks