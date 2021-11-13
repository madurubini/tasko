import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const ContainerBoxModal = styled.div`
    min-width: 100vw;
    position: fixed;
    z-index: 1;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    left: 10px;
`;

export const CloseModal = styled(MdClose)`
    font-size: 30px;
    color: white;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    border-radius: 100%;
    background: var(--green-linear);
    width: 40px;
    height: 40px;

    :hover {
        background: var(--redToast);
        filter: brightness(0.8);
    }
`;

export const FormContainer = styled.div`
    min-width: 300px;
    min-height: 300px;
    width: 40%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 200px;
    background: var(--black-gradient);
    border-radius: 20px;
    position: relative;
`;

export const InputBox = styled.div`
    width: 90%;
    min-height: 80px;
    margin: 1em;
    padding: 1em;
    color: white;
    padding: 2px;
`;
