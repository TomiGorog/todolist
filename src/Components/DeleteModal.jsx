import React from 'react'
import { ModalContext } from '../App'
import { Button } from '../Styles/Button.style'
import { ModalBackground, ModalBody, ModalContainer, ModalFooter, ModalTitle, XButton, XButtonDiv } from '../Styles/Modal.style'
import { LittleSpan } from '../Styles/Label.style'
import { H2, H3, P } from '../Styles/Fonts.style'

function DeleteModal({ task, setDeleteConfirmed, setOpenDeleteModal }) {
    
    return (
        <ModalBackground
            
          >
            <ModalContainer>
                <XButtonDiv>
                    <XButton
                        onClick={() => {
                            setOpenDeleteModal(false)
                        }}
                    >&times;
                    </XButton>
                </XButtonDiv>
                <ModalTitle>
                    <H2>Are you sure you want to delete this task?</H2>
                </ModalTitle>
                <ModalBody
                    backgroundColor={task.ready ? "lightcyan" : task.priority == "high" ? "red" : task.priority == "normal" ? "yellow" : "lightblue"}
                    color={task.ready && "grey"}>
                    <H3>{task.taskName} <LittleSpan>&#40;{task.time} min&#41;</LittleSpan></H3>
                    <LittleSpan>{task.priority} priority</LittleSpan>
                    <P>{task.description}</P>
                </ModalBody>
                <ModalFooter>
                    <Button backgroundColor={"grey"}
                        onClick={() => {
                            setOpenDeleteModal(false)
                        }}
                    ><H3>Cancel</H3></Button>
                    <Button backgroundColor={"crimson"}
                        onClick={() => {
                            setDeleteConfirmed(true)
                            setOpenDeleteModal(false)
                        }}
                    ><H3>Confirm</H3></Button>
                </ModalFooter>
            </ModalContainer>
        </ModalBackground>
    )
}

export default DeleteModal