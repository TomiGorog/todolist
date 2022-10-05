import React from 'react'
import DeleteTask from '../Components/DeleteTask'
import EditTask from '../Components/EditTask'
import MarkTask from '../Components/MarkTask'
import { hintForLongerDescription, reUsableSorting } from '../service/functions'
import { ClearButton } from '../Styles/Button.style'
import { IconDiv, TaskDiv, TaskAndMenuContainer, TitleAndTime, MenuAndClearDiv } from '../Styles/Container.style'
import { H2, P } from '../Styles/Fonts.style'
import { LittleSpan } from '../Styles/Label.style'
import ClearListModal from './ClearListModal'

function CurrentTasks({ taskList, setTaskList, setClearConfirmed }) {
    const [showFullDescription, setShowFullDescription] = React.useState(null)
    const [clearModalOpen, setClearModalOpen] = React.useState(false)

    React.useEffect(() => {
        setTaskList(reUsableSorting(taskList))
    }, [taskList])
    return (
        <MenuAndClearDiv>
            <TaskAndMenuContainer>
                {taskList.map((task) => {
                    let threeWordsIntro = hintForLongerDescription(task.description)

                    return (
                        <TaskDiv key={task.id}
                            onClick={() => {
                                setShowFullDescription(task.description)
                            }}
                            backgroundColor={task.ready ? "#e7e7e7" : task.priority === "high" ? "#f44336" : task.priority === "normal" ? "#ffbd03" : "#ADD8E6"}
                            color={task.ready && "grey"}
                        >
                            <TitleAndTime>
                                <H2 key={task.task}>{task.taskName}
                                    <LittleSpan>&#40;{task.time} min&#41;</LittleSpan>
                                </H2>
                            </TitleAndTime>
                            <P className='centered'
                                onMouseOver={() => {
                                    setShowFullDescription(task.description)
                                }}
                                onMouseOut={() => {
                                    setShowFullDescription(null)
                                }}>
                                {showFullDescription == task.description ? task.description : threeWordsIntro}
                            </P>
                            <IconDiv>
                                <MarkTask task={task} taskList={taskList} setTaskList={setTaskList} />
                                <EditTask task={task} taskList={taskList} setTaskList={setTaskList} />
                                <DeleteTask task={task} taskList={taskList} setTaskList={setTaskList} />
                            </IconDiv>
                        </TaskDiv>
                    )
                })}
            </TaskAndMenuContainer>
            {taskList.length > 0 && !clearModalOpen && <ClearButton backgroundColor={"crimson"} onClick={() => {
                setClearModalOpen(!clearModalOpen)

            }}>Clear tasklist</ClearButton>}



            {clearModalOpen && <ClearListModal
                setClearModalOpen={setClearModalOpen} setClearConfirmed={setClearConfirmed} clearModalOpen={clearModalOpen} />}
        </MenuAndClearDiv>
    )
}

export default CurrentTasks