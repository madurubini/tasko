import styled from 'styled-components';

export const Card = styled.div`
    width: 80vw;
    height: 90px;
    margin: 1em 0;
    margin-inline: auto;

    background: #131826;
    opacity: 0.64;
    backdrop-filter: blur(16px);

    border-radius: 8px;

    span {
        color: #ffffff;
    }

    @media (min-width: 1024px) {
        width: 32vw;
    }
`;

export const Body = styled.p`
    padding: 10px;
`;

export const MyLikes = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;

    svg,
    svg path {
        margin: 0 10px;
        color: var(--redToast);
    }
`;
