import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    background-color: var(--background);
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

    img {
        max-width: 85%;
        margin: 0 auto;
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
    justify-content: space-around;
    align-items: center;

    img {
        width: 180px;
        cursor: pointer;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        svg {
            font-size: 40px;
            color: #34d178;
            cursor: pointer;
        }
    }

    @media (min-width: 1024px) {
        right: 10px;
        justify-content: flex-end;
        position: absolute;
        top: 0;
        transition: all 0.5s ease-in-out;
    }

    @media (min-width: 768px) {
        div {
            display: none;
        }
    }
`;
