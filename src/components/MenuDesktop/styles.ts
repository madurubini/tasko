import styled from 'styled-components';
import { Button } from '@chakra-ui/button';

export const Container = styled.aside`
    min-height: 100%;
    background: var(--background);
    width: 200px;
    padding: 1em;
    gap: 150px;

    h3 {
        font-weight: bold;
        font-family: 'Press Start 2P', cursive;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 112px;
        margin-bottom: 44px;
        gap: 10px;
        margin: 0;
    }
`;

export const MenuButton = styled(Button)`
    width: 70% !important;
    background: var(--green-linear) !important;
    color: var(--background) !important;
`;

export const Logout = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 0;
    color: #ff0000;
    cursor: pointer;

    p {
        color: #ff0000;
        font-weight: bold;
    }

    svg {
        font-size: 20px;
    }
`;

