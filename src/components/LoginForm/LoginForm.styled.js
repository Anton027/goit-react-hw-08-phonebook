import styled from "styled-components";

export const Input = styled.input`
    @media screen and (min-width: 280px) {
        margin: 7px;
    }
    @media screen and (min-width: 900px) {
        margin: 0px 7px;
    }
    
    padding: 3px;
    border-radius: 5px;
    background-color: whitesmoke;
`;
export const Label = styled.label`
    @media screen and (max-width: 899px) {
        align-items: center;
    }
    margin-right: 8px;
    display: flex;
    align-items: flex-end;
`;
export const Button = styled.button`
    display: block;
    border-radius: 5px;
    border-color: grey;
    max-width: 80px;
    margin: 0px auto;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    grid-gap: 15px;
`;
export const Title = styled.h2`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;