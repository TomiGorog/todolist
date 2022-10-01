import React from 'react'
import DeleteTask from '../Components/DeleteTask'
import EditTask from '../Components/EditTask'
import MarkTask from '../Components/MarkTask'
import { sortByPriority } from '../service/functions'
import { IconDiv, TaskDiv, TaskAndMenuContainer, TitleAndTime } from '../Styles/Container.style'
import { LittleSpan } from '../Styles/Label.style'

function CurrentTasks({ taskList, setTaskList, }) {
    const [showFullDescription, setShowFullDescription] = React.useState(null)

    const taskObj = { taskList, setTaskList }

    React.useEffect(() => {
        sortByPriority(taskObj)
    }, [taskList])
    return (
        <>
                <TaskAndMenuContainer>
            {taskList.map((task) => {
                console.log(task)
                let threeWordsIntro = task.description.split(' ').slice(0, 3).join(' ').concat("...")
                return (
                        <TaskDiv key={task.id}
                        onClick={() => {
                            setShowFullDescription(task.description)
                        }}
                            backgroundColor={task.ready ? "lightcyan" : task.priority == "high" ? "red" : task.priority == "normal" ? "yellow" : "lightblue"}
                            color={task.ready && "grey"}
                        >
                            <TitleAndTime>
                                <h2 key={task.task}>{task.taskName} 
                                    <LittleSpan>&#40;{task.time} min&#41;</LittleSpan>
                                </h2>
                            </TitleAndTime>
                            <p className='centered' onMouseOver={() => {
                                setShowFullDescription(task.description)
                            }}
                            
                                onMouseOut={() => {
                                    setShowFullDescription(null)
                                }}>  {showFullDescription == task.description ? task.description : threeWordsIntro}
                            </p>
                            <IconDiv>
                                <MarkTask task={task} taskList={taskList} setTaskList={setTaskList} />
                                <EditTask task={task} taskList={taskList} setTaskList={setTaskList} />
                                <DeleteTask task={task} taskList={taskList} setTaskList={setTaskList} />
                            </IconDiv>
                        </TaskDiv>
                )
            })}
            </TaskAndMenuContainer>
        </>
    )
}

export default CurrentTasks