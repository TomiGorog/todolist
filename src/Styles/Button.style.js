import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5px;
    padding: 0.5rem 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2f2f2;
`

export const ButtonContainer = styled.div`
display: flex;
gap: 1rem;
`