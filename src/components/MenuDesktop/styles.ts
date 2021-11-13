import styled from 'styled-components';
import { Button } from '@chakra-ui/button';

export const Container = styled.aside`
    min-height: 100%;
    background: var(--black-gradient);
    width: 200px;

    h3 {
        font-weight: bold;
        font-family: 'Press Start 2P', cursive;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 112px;
        margin-bottom: 44px;
        gap: 10px;
    }
`;

export const MenuButton = styled(Button)`
    width: 70% !important;
    background: var(--green-linear) !important;
    color: var(--font-color) !important;
`;
