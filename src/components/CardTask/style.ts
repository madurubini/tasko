import { Button } from '@chakra-ui/button';
import {
    MdAdd,
    MdOutlineDeleteForever,
    MdOutlineModeEditOutline,
} from 'react-icons/md';
import styled from 'styled-components';
import Diamond from '../../assets/diamond.svg';

export const TaskCard = styled.li`
    min-width: 230px;
    background: url(${Diamond}), var(--green-linear);
    background-repeat: no-repeat;
    height: 230px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 5px;

    h3,
    p {
        color: var(--background);
        font-family: Inter;
        font-weight: bold;
        min-height: 50px;
    }
`;

export const ScrollTasks = styled.div`
    width: 95%;
    min-height: 300px;
    max-height: 30vw;
    background: var(--black-gradient);
    overflow: auto;
    margin: 5px auto;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const ScrollBadge = styled(ScrollTasks)`
    align-items: flex-start;
    min-height: 235px;
    flex-direction: row;
    justify-content: flex-start;
`;

export const AddIcon = styled(MdAdd)`
    color: var(--background);
    font-size: 30px;
    top: 10px;
    right: 10px;
    border-radius: 100%;
    cursor: pointer;
    background: var(--green-linear);

    :hover {
        filter: brightness(0.8);
    }
`;

export const EditIcon = styled(MdOutlineModeEditOutline)`
    svg,
    svg path {
        color: var(--background) !important;
    }
`;

export const DeleteForever = styled(MdOutlineDeleteForever)`
    svg,
    svg path {
        color: var(--background) !important;
    }
`;

export const SubMenu = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 20px;

    svg {
        font-size: 25px;
        cursor: pointer;
    }
`;

export const TaskButton = styled(Button)`
    width: 60% !important;
    background: var(--button-black) !important;
    color: var(--font-color) !important;
    margin-bottom: 5px;
`;

export const TasksContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
`;
