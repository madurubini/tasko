import { Button } from '@chakra-ui/button';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

export const TaskCard = styled.li`
    min-width: 200px;
    background-image: var(--green-linear);
    height: 200px;
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
    width: 90%;
    min-height: 270px;
    max-height: 30vw;
    background: var(--black-gradient);
    overflow: auto;
    margin: 5px auto;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    position: relative;
`;

export const ScrollBadge = styled(ScrollTasks)`
    align-items: center;
    min-height: 230px;
`;

export const AddIcon = styled(MdAdd)`
    color: white;
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 100%;
    cursor: pointer;
    background: var(--green-linear);

    :hover {
        filter: brightness(0.8);
    }
`;

export const SubMenu = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    svg {
        font-size: 25px;
        cursor: pointer;
    }
`;

export const TaskButton = styled(Button)`
    width: 70% !important;
    background: var(--button-black) !important;
    color: var(--font-color) !important;
    margin-bottom: 5px;
`;

export const AddButtonContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
`;
