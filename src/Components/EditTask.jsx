import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'
import { EditContext } from '../App'
import EditForm from './EditForm'
import NewTaskCard from './NewTaskCard'

function EditTask({task, taskList, setTaskList}) {
  const [openEditModal, setOpenEditModal] = React.useState(false)

  let editContext = React.useContext(EditContext)
  console.log(editContext.taskUnderEdit)
  return (
    <>
    {!openEditModal? 
      <FontAwesomeIcon 
      onClick={() => {
        setOpenEditModal(true)
        // editContext.setTaskUnderEdit(task)
        // editContext.setAddNewTask(false)
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