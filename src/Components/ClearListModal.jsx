import React from 'react'
import { Button } from '../Styles/Button.style'
import { ModalBackground, ModalContainer, ModalFooter, ModalTitle, XButton, XButtonDiv } from '../Styles/Modal.style'
import { H2, H3, } from '../Styles/Fonts.style'

function ClearListModal({ setClearConfirmed, setClearModalOpen }) {

    let menuRef = React.useRef()

    React.useEffect(() => {

        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setClearModalOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }

    }, [])

    return (

        <ModalBackground>
            <ModalContainer
                ref={menuRef} >
                <XButtonDiv >
                    <XButton
                        onClick={() => {
                            setClearModalOpen(false)
                        }}
                    >&times;
                    </XButton>
                </XButtonDiv>
                <ModalTitle >
                    <H2>Are you sure you want to delete the tasklist?</H2>
                </ModalTitle>
                <ModalFooter>
                    <Button backgroundColor={"grey"}
                        onClick={() => {
                            setClearModalOpen(false)
                        }}
                    ><H3>Cancel</H3></Button>
                    <Button backgroundColor={"crimson"}
                        onClick={() => {
                            setClearConfirmed(true)
                            setClearModalOpen(false)
                        }}
                    ><H3>Confirm</H3></Button>
                </ModalFooter>
            </ModalContainer>
        </ModalBackground>

    )
}

export default ClearListModal