import { Button } from '@chakra-ui/button';
import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: center;

    width: 100%;

    @media (min-width: 768px) {
        justify-content: flex-end;
    }
`;

export const Image = styled.img`
    width: 40px;
`;

export const GlobalSection = styled.section`
    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const QuestHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TitleBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1em;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

export const QuestionsTitle = styled.h2`
    font-family: var(--subTitle);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
`;

export const AskIcon = styled.img`
    background-color: transparent;
    width: 90px;
    height: 90px;
`;

export const QuestionsTab = styled.section`
    overflow: scroll;
    border-radius: 5px;

    width: 90vw;
    height: 340px;
    margin-inline: auto;

    @media (min-width: 1024px) {
        width: 35vw;
        margin-inline: none;
    }
`;

export const QuestCard = styled.div`
    padding: 10px;
    margin: 1em 0;
    margin-inline: auto;
    width: 95%;
    height: 80px;

    text-align: center;

    background: #ffffff;
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    @media (min-width: 1024px) {
        width: 90%;
        height: 100px;
        margin: 0 auto;
    }
`;

export const HeaderSection = styled.header`
    margin-bottom: 1em;
`;

export const MyQuestTitle = styled.h2`
    text-align: start;
    margin-left: 1em;
    font-family: var(--subTitle);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;

    @media (min-width: 1024px) {
        font-size: 20px;
        margin: 1.5em 1em;
    }
`;

export const MakeQuestButtonTop = styled(Button)`
    background-color: transparent !important;
    color: white;

    svg,
    svg path {
        color: #63f7a1;
        font-size: 35px;
        border-radius: 8px;
        padding: 0;

        :hover {
            color: #27ae60;
            transition: all 0.4s;
        }
    }

    span {
        display: none;
    }

    @media screen and (min-width: 606px) {
        background: var(--green-linear) !important;
        margin: 0 2em;

        svg,
        svg path {
            display: none;
        }

        span {
            display: inline;
        }
    }

    @media screen and (min-width: 768px) {
        margin: 0 3em;
    }

    @media screen and (min-width: 1024px) {
        display: none !important;
    }
`;

export const MakeQuestButtonCenter = styled(Button)`
    width: 200px;
    height: 40px;

    background: var(--green-linear) !important;
    color: white !important;
    border-radius: 8px;
`;

export const MyQuestionsTab = styled.div`
    overflow: scroll;
    border-radius: 5px;

    width: 90vw;
    height: 340px;
    margin-inline: auto;

    @media (min-width: 1024px) {
        width: 35vw;
        margin-inline: none;
    }
`;

export const MyQuestCard = styled.div`
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
