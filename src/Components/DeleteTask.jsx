import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { ModalContext } from '../App'
import DeleteModal from './DeleteModal'
import Trial from './Trial'


function DeleteTask({task, taskList, setTaskList}) {
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
  }, [deleteConfirmed, openDeleteModal ])
  return (
    <>
    {!openDeleteModal &&
    <FontAwesomeIcon 
    onClick={() => {
      // modalContext.setModalBackground(true)
      setOpenDeleteModal(true)
      console.log(openDeleteModal)
        
      }}
      className='icon'
      icon={faSquareMinus}/>
}
      {openDeleteModal &&
    <DeleteModal task={task}  setDeleteConfirmed={setDeleteConfirmed}  setOpenDeleteModal={setOpenDeleteModal}
    /> 
       }
    
    
      
      </>
  )
}

export default DeleteTask