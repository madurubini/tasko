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

export const LogoHeader = styled.picture`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 1em;

    img {
        width: 180px;
        cursor: pointer;
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

    @media (min-width: 1024px) {
        justify-content: center;
    }
`;

export const TitleBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1em;

    @media (min-width: 768px) {
        justify-content: flex-start;
    }

    @media (min-width: 1024px) {
        justify-content: space-between;
        width: 60%;
    }
`;

export const QuestionsTitle = styled.h2`
    font-family: var(--subTitle);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;

    @media (min-width: 1024px) {
        font-size: 20px;
    }
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

export const HeaderSection = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 1em;

    @media (min-width: 1024px) {
        margin-bottom: 0;
        justify-content: center;
    }
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
        margin: 1.5em 1em 1em 1em;
    }
`;

export const MakeQuestButtonTop = styled(Button)`
    background-color: var(--green-linear) !important;
    color: var(--background);
    svg,
    svg path {
        color: var(--background) !important;
        cursor: pointer;
        border-radius: 100%;
        background: var(--green-linear);
        width: 30px;
        height: 30px;

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
    display: none !important;

    @media (min-width: 1024px) {
        display: inline-block !important;
        width: 200px;
        height: 40px;

        background: var(--green-linear) !important;
        color: var(--background) !important;
        border-radius: 8px;
    }
`;

export const MyQuestionsTab = styled.div`
    overflow: scroll;
    border-radius: 5px;

    width: 90vw;
    height: 340px;
    margin-inline: auto;

    @media (min-width: 1024px) {
        width: 35vw;
    }
`;
