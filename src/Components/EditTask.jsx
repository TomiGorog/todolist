import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'
import NewTaskCard from './NewTaskCard'

function EditTask({task, taskList, setTaskList}) {
  const [openEditModal, setOpenEditModal] = React.useState(false)

  return (
    <>
    {!openEditModal? 
      <FontAwesomeIcon 
      onClick={() => {
        setOpenEditModal(true)
      }}
      className='icon'
      icon={faSquarePen}
      />
      : <NewTaskCard task={task} taskList={taskList} setTaskList={setTaskList} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} />
    }
    </>
  )
}

export default EditTask