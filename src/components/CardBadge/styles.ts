import styled from 'styled-components';

export const BadgeCard = styled.div`
    min-width: 150px;
    width: 150px;
    height: 180px;
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

    img {
        border-radius: 100%;
        width: 80px;
    }
`;

export const BadgeTitle = styled.h3`
    font-weight: bold;
    font-size: 14px;
`;

export const BadgeText = styled.p`
    font-size: 12px;
    max-width: 140px;
`;
