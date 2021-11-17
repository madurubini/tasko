import styled from 'styled-components';

export const BadgeCard = styled.div`
    min-width: 160px;
    width: 160px;
    height: 200px;
    border: 2px solid var(--background);
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: var(--black-gradient);
    font-family: 'Inter';
    margin: 5px;

    .N {
        background: red;
        border-radius: 100%;
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .F {
        background: purple;

        border-radius: 100%;
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .P {
        border-radius: 100%;
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: blue;
    }

    .C {
        background: green;

        border-radius: 100%;
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .V {
        background: orange;

        border-radius: 100%;
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Q {
        background: gray;

        border-radius: 100%;
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        max-width: 100px;
        width: 70px;
        height: 70px;
        background-size: cover;
        padding: 2px;
        background-clip: padding-box;
        border-radius: 10px;
        filter: opacity(0.9);
    }
`;

export const BadgeTitle = styled.h3`
    font-weight: bold;
    font-size: 14px;
`;

export const BadgeText = styled.p`
    font-size: 12px;
    max-width: 150px;
    height: 54px;
    display: flex;
    align-items: center;
    margin-top: 2px;
`;
