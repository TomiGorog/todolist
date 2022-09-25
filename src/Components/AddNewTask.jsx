import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function AddNewTask({ addNewTask, setAddNewTask }) {
    return (
        <>
        { !addNewTask &&
             <FontAwesomeIcon
             onClick={() => {
                 setAddNewTask(true)
                }}
                icon={faPlus}
                className="plusIcon" />
                
            }
            </>
  )
}

export default AddNewTask