import styled from "styled-components";


// export const ModalBackground = styled.div`
// width: 100vw;
// height: 100vh;
// background-color: rgba(200, 200, 200);
// position: absolute;
// top: 0; 
// left: 0;
// display: flex;
// justify-content: center;
// align-items: center;






export const ModalContainer = styled.div`
  width: 75%;
  height: auto;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
background-color: red;


`

export const ModalTitle = styled.div`
display: inline-block;
  text-align: center;
`
export const ModalBody = styled.div`
    background-color: ${(props) => props.backgroundColor};
    /* flex: 50%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  align-items: center;
  /* font-size: 1.7rem; */
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
`
export const ModalFooter = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
export const XButtonDiv = styled.div`
display: flex;
  justify-content: flex-end;
width: 100%;

`
export const XButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`