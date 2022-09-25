import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { ModalContext } from '../App'
import DeleteModal from './DeleteModal.jsx'
import Trial from './Trial'


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
    modalContext.setModalBackground(false)
    }
  }, [deleteConfirmed ])
  return (
    <>
    {!openDeleteModal? 
    <FontAwesomeIcon 
    onClick={() => {
      modalContext.setModalBackground(true)
      setOpenDeleteModal(true)
      console.log(taskList)
        
      }}
      className='icon'
      icon={faSquareMinus}/>
      :
      <>
      <Trial />
    <DeleteModal task={task}  setDeleteConfirmed={setDeleteConfirmed}  setOpenDeleteModal={setOpenDeleteModal}
    /> 
    </>
    
      }
      </>
  )
}

export default DeleteTask