import styled from 'styled-components';

export const MainContainer = styled.div``;

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    margin: 2em 0;
`;

export const ClipGif = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    h1 {
        font-size: 40px;
        text-align: center;
    }

    @media (min-width: 1024px) {
        h1 {
            text-align: left;
            margin-left: 50px;
        }
    }
`;

export const About = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media (min-width: 1024px) {
        div:nth-child(2) {
            flex-direction: row-reverse;
        }

        div:nth-child(4) {
            flex-direction: row-reverse;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p {
        width: 300px;
        text-align: center;
    }

    img {
        width: 180px;
    }

    div {
        margin: 0 !important;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }
`;

export const Team = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
    margin-top: 20px;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const Members = styled.div`
    img {
        width: 100px;
        margin-bottom: 20px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        svg {
            font-size: 30px;
            cursor: pointer;
        }
    }
`;
