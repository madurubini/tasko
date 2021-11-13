import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { SubTitle } from '../../pages/Dashboard/styles';

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

export const InputBox = styled.div`
    width: 70%;

    margin: 1em;
    padding: 1em;
    color: white;
    padding: 2px;
`;

export const TitleModal = styled(SubTitle)`
    font-size: 16px;
    text-align: center;
`;

export const AddButtonBox = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export const AddTaskButtonBox = styled(AddButtonBox)`
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
`;
