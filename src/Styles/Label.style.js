import styled from "styled-components";


export const MainLabel = styled.label`
font-size: 1.5rem;
font-weight: 600;
margin-bottom: 0.5rem;


`

export const SecondaryLabel = styled.label`
font-size: 1.25rem;
margin-bottom: 0.5rem;

`
export const MainInput = styled.input`
padding: 0.5rem;
border-radius: 5px;

@media screen and (min-width: 1024px) {
    font-size: 1.25rem;
}

`

export const NoTaskHeading = styled.h1`
font-size: 1.75rem;
`
export const Heading3withtopPadding = styled.h3`
font-size: 1.75rem;
padding: 3rem 0 0.5rem 0;
`

export const LittleSpan = styled.span`
font-size: 1rem;
/* margin-left: auto; */


`

export const DropDownOption = styled.option`
background-color: ${(props) => props.backgroundColor};
color: black;
font-size: 1rem;
`

