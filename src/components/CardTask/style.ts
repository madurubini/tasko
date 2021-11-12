import styled from 'styled-components';

export const TaskCard = styled.li`
    width: 200px;
    background-image: var(--green-linear);
    height: 200px;
    border-radius: 10px;
    text-align: center;

    h3,
    p {
        color: var(--background);
        font-family: Inter;
        font-weight: bold;
    }
`;

export const ScrollTasks = styled.div`
    width: 90%;
    min-height: 40vw;
    background: var(--black-gradient);
    overflow: auto;
    border: 1px solid red;
    display: flex;
`;
