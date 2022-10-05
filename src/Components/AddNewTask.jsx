import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewTaskCard from './NewTaskCard'

function AddNewTask({ setTaskList, taskList }) {
    const [openAddingModal, setOpenAddingModal] = React.useState(false)

    return (
        <>
            {openAddingModal ?
                <NewTaskCard setTaskList={setTaskList} taskList={taskList} setOpenAddingModal={setOpenAddingModal} />
                :
                <>
                    <FontAwesomeIcon
                        onClick={() => {
                            setOpenAddingModal(true)
                        }}
                        icon={faPlus}
                        className="plusIcon" />
                </>
            }
        </>
    )
}

export default AddNewTask