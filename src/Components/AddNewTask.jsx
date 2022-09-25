import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewTaskCard from './NewTaskCard'
import { ModalContext } from '../App'
function AddNewTask({setTaskList, taskList}) {

    const [openAddingModal, setOpenAddingModal] = React.useState(false)
    let modalContext = React.useContext(ModalContext)
    return (
        <>
        { openAddingModal?
         <NewTaskCard setTaskList={setTaskList} taskList={taskList} setOpenAddingModal={setOpenAddingModal} /> 
        :
             <FontAwesomeIcon
             onClick={() => {
                modalContext.setModalBackground(true)
                setOpenAddingModal(true)

                }}
                icon={faPlus}
                className="plusIcon" />
                
            }
            </>
  )
}

export default AddNewTask