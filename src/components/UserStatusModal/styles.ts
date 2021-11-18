import { Button } from '@chakra-ui/button';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

export const ContainerStatusModal = styled.div`
    min-width: 100vw;
    position: fixed;
    z-index: 1;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0px;
    left: 0px;
`;

export const ContainerStatus = styled.div`
    width: 269px;
    height: 275px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    background: var(--black-gradient);
    position: relative;
    padding: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    text-align: center;

    p {
        padding: 5px;
    }
`;

export const CloseModal = styled(MdClose)`
    font-size: 30px;
    color: var(--background);
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    border-radius: 100%;
    background: var(--green-linear);
    width: 30px;
    height: 30px;

    :hover {
        background: var(--redToast);
        filter: brightness(0.8);
    }
`;

export const LogoutButton = styled(Button)`
    width: 75% !important;
    background: var(--green-linear) !important;
    color: var(--font-color) !important;
`;
