import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    background-color: var(--background);
    height: 100vh;

    @media (min-width: 1024px) {
        justify-content: space-evenly;
    }
`;

export const CardBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ClipArtBox = styled.section`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
    }
`;
