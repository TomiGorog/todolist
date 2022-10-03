import React from 'react'
import { Button } from '../Styles/Button.style'
import { ModalBackground, ModalContainer, ModalFooter, ModalTitle, XButton, XButtonDiv } from '../Styles/Modal.style'
import { H2, H3,  } from '../Styles/Fonts.style'

function ClearListModal({setClearConfirmed, setClearModalOpen}) {
  return (
        <ModalBackground
            
          >
            <ModalContainer>
                <XButtonDiv>
                    <XButton
                        onClick={() => {
                            setClearModalOpen(false)
                        }}
                    >&times;
                    </XButton>
                </XButtonDiv>
                <ModalTitle>
                    <H2>Are you sure you want to delete the tasklist?</H2>
                </ModalTitle>
                <ModalFooter>
                    <Button backgroundColor={"grey"}
                        onClick={() => {
                            setClearModalOpen(false)
                            console.log("no")
                        }}
                    ><H3>Cancel</H3></Button>
                    <Button backgroundColor={"crimson"}
                        onClick={() => {
                            setClearConfirmed(true)
                            setClearModalOpen(false)
                        console.log("hw")
                        }}
                    ><H3>Confirm</H3></Button>
                </ModalFooter>
            </ModalContainer>
        </ModalBackground>
    
  )
}

export default ClearListModal