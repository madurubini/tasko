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
    min-height: 40vw;
    background: var(--black-gradient);
    overflow: auto;
    border: 1px solid red;
    display: flex;
    margin: 5px auto;
    padding: 5px;
`;

export const SubMenu = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    svg {
        font-size: 25px;
    }
`;
