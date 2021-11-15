import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

export const ContainerBoxModal = styled.div`
    min-width: 100vw;
    position: fixed;
    z-index: 1;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0px;
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

export const Form = styled.div`
    min-width: 300px;
    min-height: 300px;
    min-height: 200px;
    width: 40%;
    height: 40%;
    gap: 25px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: var(--black-gradient);
    border-radius: 20px;
    position: relative;

    @media (min-width: 768px) {
        width: 50%;
        height: 30%;
    }

    @media (min-width: 1024px) {
        width: 40%;
        height: 30%;
        gap: 20px;
    }

    @media (min-width: 1440px) {
        width: 25%;
    }
`;

export const InputField = styled(Input)`
    width: 80% !important;
    margin: 1em !important;
    padding: 5px !important;

    color: white !important;
`;

export const MenuButton = styled(Button)`
    width: 70% !important;
    background: var(--green-linear) !important;
    color: var(--font-color) !important;

    @media (min-width: 768px) {
        width: 50% !important;
    }

    @media (min-width: 1024px) {
        width: 55% !important;
    }
`;
