import styled from "styled-components";


export const UserButton = styled.button`
    min-width: 107px;
    margin: 10px 0px;
    padding: 8px 12px;
    border-radius: 5px;
    border-color: grey;
    &:hover{
        background-color: red;
        color: white;
    }
`;

export const UserInfo = styled.p`
    margin: 10px 0px;
    font-weight: bold;
`;