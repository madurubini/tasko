import styled from 'styled-components';

export const SubTitle = styled.h2`
    font-family: 'Press Start 2P';
    margin: 1em;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;

    img {
        width: 40px;
    }
`;

export const Container = styled.div`
    display: flex;

    aside {
        display: none;
    }

    @media (min-width: 768px) {
        aside {
            display: block;
        }

        nav {
            display: none;
        }
    }
`;

export const Main = styled.div`
    width: 100%;
`;
