import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 10px;
    margin: 1em 0;
    margin-inline: auto;
    width: 95%;
    height: 6em;

    text-align: center;

    background: var(--card-background);
    box-sizing: border-box;
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    :hover {
        border: 1px solid var(--card-border-hover);
    }

    @media (min-width: 1024px) {
        width: 90%;
        height: 100px;
        margin: 0 auto;
    }
`;

export const Quest = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    margin: 1em 0;
`;
