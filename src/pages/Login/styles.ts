import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    background-color: var(--background);
    min-height: 80vh;
    max-width: 1440px;
    margin: 0 auto;

    @media (min-width: 1024px) {
        justify-content: space-evenly;
    }
`;

export const CardBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1440px) {
        justify-content: center;
    }
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

export const LogoBox = styled.div`
    display: inline;

    img {
        width: 180px;
    }
`;

export const LogoHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 1em;
    img {
        width: 180px;
    }

    @media (min-width: 1024px) {
        position: fixed;
        right: 10px;
    }
`;
