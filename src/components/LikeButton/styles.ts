import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    text-align: center;
    gap: 5px;

    svg,
    svg path {
        cursor: pointer;
        color: #ff0000;
        font-size: 18px;
    }
`;