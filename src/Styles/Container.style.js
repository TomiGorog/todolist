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
justify-content: flex-start;
align-items: center;
gap: 1rem;

`

export const FormContainer = styled.form`
border: 1px solid #5CB8E4;
background-color: #5CB8E4;
padding: 3%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.5rem;
color: white;



`

export const MainInputDiv = styled.div`
/* display: flex;
justify-content: center;
align-items: center;
background-color: aliceb lue; */
display: flex;
flex-direction: column;
width: 100%;
text-align: center;
padding: 3%;
border-radius: 5px;

`

export const TextAreaDiv = styled.div`
display: block;
width: 100%;
text-align: center;
border-radius: 5px;


`

export const TwoInputDiv = styled.div`
/* display: flex;
width: 100%;
justify-content: center;
align-items: center; */
display: flex;
flex-direction: column;
gap: 2rem;
border-radius: 5px;



`

export const SecondaryDivsForForms = styled.div`
display: flex;
/* gap: 1rem; */
flex-direction: column;
align-items: center;
border-radius: 5px;



`

export const NormalInputField = styled.input`
width: 5rem;
padding: 0.1rem;
border-radius: 5px;
`

export const TextAreaInputField = styled.textarea`
padding: 0.1rem;
border-radius: 5px;


`

export const SelectField = styled.select`
padding: 0.1rem;
width: 100%;    
border-radius: 5px;

`

export const TaskContainer = styled.div`
    background-color: ${(props) => props.backgroundColor};

color: white;
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;
justify-content: center;
flex-wrap: wrap;

`
