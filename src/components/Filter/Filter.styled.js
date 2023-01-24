import styled from "styled-components";

export const InputSearch = styled.input`
    margin: 8px 8px;
    padding: 5px;
    border-radius: 5px;
    background-color: whitesmoke;
    &:hover, &:focus{
        background-color: greenyellow;
    }
`;

export const LabelSearch = styled.label`
    display: flex;
    align-items: center;
`;

export const Icon = styled.p`
    &:hover{
        scale: 1.5;
    }
`;