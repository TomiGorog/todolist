import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import DeleteModal from './DeleteModal'


function DeleteTask({ task, taskList, setTaskList }) {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false)
  const [deleteConfirmed, setDeleteConfirmed] = React.useState(false)
  console.log(openDeleteModal)
  React.useEffect(() => {
    if (deleteConfirmed) {
      let index = taskList.findIndex(element => {
        return element.taskName == task.taskName
      })
      let copyArray = [...taskList]
      copyArray.splice(index, 1)
      setTaskList(copyArray)
      setDeleteConfirmed(false)
    }
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