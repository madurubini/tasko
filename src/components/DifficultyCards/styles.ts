import styled from 'styled-components';

export const DifficultyBox = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 50px;

    svg {
        font-size: 25px;
        color: var(--background) !important;
    }
`;

export const LightningBox = styled.div`
    display: flex;
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    max-width: 210px;
    display: flex;
    align-items: center;
`;
