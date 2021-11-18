import { MdArrowDropUp } from 'react-icons/md';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const Logo = styled.div`
    img {
        width: 180px;
    }
`;

export const Menu = styled.div`
    p {
        cursor: pointer;
        font-weight: bold;
        background: none;
    }

    svg {
        font-size: 40px;
        cursor: pointer;
    }

    div {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 1px;
        gap: 35px;
        background: var(--black-gradient);
        transform: translate(50%, 50%);
        right: 50%;
        padding: 60px;
        top: -5px;
        width: 100%;
        z-index: 1;
    }

    @media (min-width: 1024px) {
        svg {
            display: none;
        }
        div {
            display: none;
        }
    }
`;

export const Links = styled.nav`
    display: none;

    @media (min-width: 1024px) {
        display: flex;
        gap: 20px;
        margin-right: 100px;
    }
`;

export const CloseMenu = styled(MdArrowDropUp)`
    color: white;
`;
