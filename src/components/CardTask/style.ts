import { Button } from '@chakra-ui/button';
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
    width: 95%;
    min-height: 240px;
    max-height: 30vw;
    background: var(--black-gradient);
    overflow: auto;
    display: flex;
    margin: 5px auto;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

export const SubMenu = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    svg {
        font-size: 25px;
    }
`;

export const TaskButton = styled(Button)`
    width: 70% !important;
    background: var(--button-black) !important;
    color: var(--font-color) !important;
    margin-bottom: 5px;
`;
