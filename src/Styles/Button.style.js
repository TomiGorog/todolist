import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5px;
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2f2f2;
    :active {
        border: none;
        padding: 0.75rem 1rem;
        font-weight: 700;
    }
`

export const ButtonContainer = styled.div`
display: flex;
gap: 1rem;
`

export const ClearButton = styled.button`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5px;
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    width: max-content;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f2f2f2;
    :active {
        border: none;
        padding: 0.75rem 1rem;
        font-weight: 700;
    }
    
    margin-top: 2rem;
@media screen and (min-width: 1024px) {
    /* bottom: 0%; */
}
`