import styled from "styled-components";

export const AppContainer = styled.div`
/* background-color: #f2f2f2; */
width: 100vw;
height: 100vh;
font-family: OpenSans;
box-sizing: border-box;
font-size: 16px;
display: flex;
flex-direction: column;
justify-content: ${(props) => props.flexProp};
align-items: center;
margin: 0;
padding: 0;

`
export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: absolute;
  top: 0; 
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  overflow: hidden;
`
export const FormContainer = styled.form`
background-color: #5CB8E4;
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
color: white;
gap: 0;
width: 75%;
height: auto;
border-radius: 12px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
margin: 1rem 0;

@media screen and (min-width: 1024px) {
    padding: 2rem 1rem;
    width: 55%;
}
`

export const MainInputDiv = styled.div`
display: flex;
flex-direction: column;
width: 90%;
text-align: center;
padding-bottom: 1rem;
border-radius: 5px;

`

export const TextAreaDiv = styled.div`
display: block;
width: 100%;
text-align: center;
border-radius: 5px;
font-size: 1.25rem

`

export const TwoInputDiv = styled.div`

display: flex;
flex-direction: column;
gap: 1rem;
border-radius: 5px;
padding-bottom: 1rem;

@media screen and (min-width: 768px) {
    flex-direction: row;
}
`

export const SecondaryDivsForForms = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-radius: 5px;



`

export const NormalInputField = styled.input`
width: 3rem;
font-size: 1.25rem;
padding: 0.25rem 0.5rem;

border-radius: 5px;

`

export const TextAreaInputField = styled.textarea`
padding: 0.5rem;
width: 90%;
border-radius: 5px;
margin: 0.5rem 0;
height: 4rem;   

@media screen and (min-width: 768px) {
    height: 6rem;
}

@media screen and (min-width: 1024px) {
    height: 8rem;
    font-size: 1.25rem
}

`

export const SelectField = styled.select`
/* padding: 0.1rem; */
padding: 0.25rem 0.5rem;

width: 100%;    
border-radius: 5px;
background-color: ${(props) => props.backgroundColor};
font-size: 1.25rem;

`


export const TaskDiv = styled.div`
    background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding: 0.25rem;

`

export const IconDiv = styled.div`
display: flex;
gap: 0.25rem;
`



export const TaskAndMenuContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
gap: 0.5rem

`

export const TitleAndTime = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%; 
gap: 2rem;

`

export const ClearButtonDiv = styled.div`
position: absolute;
bottom: 0;
`