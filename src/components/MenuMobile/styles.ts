import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background: var(--green-linear);
    margin-top: 20px;
    border-radius: 26px;

    div {
        display: flex;
        gap: 30px;
        background: none;

        svg {
            background: none;
            font-size: 30px;
            cursor: pointer;
        }
    }
`;

export const Icons = styled.nav``;
