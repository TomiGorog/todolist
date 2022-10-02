import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import DeleteModal from './DeleteModal'
import { deleteTask } from '../service/functions'


function DeleteTask({ task, taskList, setTaskList }) {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false)
  const [deleteConfirmed, setDeleteConfirmed] = React.useState(false)

  const taskObj = { task, taskList, setTaskList }
  const deleteObj = { deleteConfirmed, setDeleteConfirmed }
  React.useEffect(() => {
    deleteTask(taskObj, deleteObj)
  }, [deleteConfirmed])
  return (
    <>
      {!openDeleteModal ?
        <FontAwesomeIcon
          onClick={() => {
            setOpenDeleteModal(true)
          }}
          className='icon'
          icon={faSquareMinus}
        />
        :
        <DeleteModal task={task} setDeleteConfirmed={setDeleteConfirmed} setOpenDeleteModal={setOpenDeleteModal}
        />
      }
    </>
  )
}

export default DeleteTask