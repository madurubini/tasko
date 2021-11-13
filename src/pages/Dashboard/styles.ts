import styled from 'styled-components';

export const SubTitle = styled.h2`
    font-family: 'Press Start 2P';
    margin: 1em;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 5px;

    img {
        width: 40px;
    }

    @media (min-width: 1024px) {
        font-size: 26px;
    }
`;

export const Container = styled.div`
    display: flex;
    min-height: 95vh;
    justify-content: center;
    align-items: center;

    aside {
        display: none;
    }

    @media (min-width: 768px) {
        align-items: flex-start;

        aside {
            display: block;
        }

        nav {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        align-items: center;
    }
`;

export const Main = styled.div`
    width: 100%;
`;
