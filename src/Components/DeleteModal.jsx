import React from 'react'
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
                    backgroundColor={task.ready ? "#e7e7e7" : task.priority == "high" ? "#f44336" : task.priority == "normal" ? "#ffbd03" : "#55c2da"}
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