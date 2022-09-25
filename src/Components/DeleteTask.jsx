import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import Modal from './DeletingModal'
import { ModalContext } from '../App'

function DeleteTask({task, taskList, setTaskList}) {
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false)
  const [deleteConfirmed, setDeleteConfirmed] = React.useState(false)
  let modalContext = React.useContext(ModalContext)

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
    {openDeleteModal? <Modal task={task}  setDeleteConfirmed={setDeleteConfirmed}  setOpenDeleteModal={setOpenDeleteModal}
    /> 
    : 
    <FontAwesomeIcon 
    onClick={() => {
      modalContext.setModalBackground(true)
      setOpenDeleteModal(true)
      console.log(taskList)
        
      }}
      className='icon'
      icon={faSquareMinus}/>}
      </>
  )
}

export default DeleteTask