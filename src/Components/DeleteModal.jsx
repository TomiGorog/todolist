import React from 'react'
import { ModalContext } from '../App'
import { Button } from '../Styles/Button.style'
import { ModalBackground, ModalBody, ModalContainer, ModalFooter, ModalTitle, XButton, XButtonDiv } from '../Styles/Modal.style'
import { LittleSpan } from '../Styles/Label.style'

function DeleteModal ({task, setDeleteConfirmed, setOpenDeleteModal}) {
    console.log(task)
console.log("deletemodal")
return (
<ModalBackground>
    <ModalContainer>
        <XButtonDiv>

            <XButton
                onClick={() => {
                    setOpenDeleteModal(false)
                }}
            >&times;</XButton>
        </XButtonDiv>
        <ModalTitle>
            <h2>Are you sure you want to delete this task?</h2>
        </ModalTitle>
        <ModalBody
            backgroundColor={task.ready ? "lightcyan" : task.priority == "high" ? "red" : task.priority == "normal" ? "yellow" : "lightblue"}
            color={task.ready && "grey"}>
            <h3>{task.taskName} <LittleSpan>&#40;{task.time} min&#41;</LittleSpan></h3>
            <LittleSpan>{task.priority} priority</LittleSpan>
            <p>{task.description}</p>
        </ModalBody>
        <ModalFooter>
            <Button backgroundColor={"grey"}
                onClick={() => {
                    setOpenDeleteModal(false)
                }}
            >Cancel</Button>
            <Button backgroundColor={"crimson"}
                onClick={() => {
                    setDeleteConfirmed(true)
                    setOpenDeleteModal(false)
                }}

            >Confirm</Button>
        </ModalFooter>
    </ModalContainer>
    </ModalBackground>
)
}

export default DeleteModal