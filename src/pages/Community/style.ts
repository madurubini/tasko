import { Button } from '@chakra-ui/button';
import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;

    width: 100%;
`;

export const Image = styled.img`
    width: 260px;
`;

export const AskSection = styled.section`
    width: 100vw;
    height: 246px;

    background: var(--green-linear);
`;

export const TitleBlock = styled.div`
    display: flex;
    align-items: center;

    margin: 1em;
`;

export const QuestionsTitle = styled.h2`
    font-family: var(--subTitle);
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    margin: 1em;
`;

export const AskIcon = styled.img`
    background-color: transparent;
    width: 90px;
    height: 90px;
`;

export const QuestContent = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const QuestionsTab = styled.section`
    overflow: scroll;
    border-radius: 5px;

    width: 35vw;
    height: 340px;
`;

export const MyQuestionsTab = styled.section`
    overflow: scroll;
    border-radius: 5px;

    width: 27rem;
    height: 340px;
`;

export const Test = styled.div`
    width: 330px;
    height: 100px;
    margin: 0 auto;
    padding: 10px;

    text-align: center;

    background: #ffffff;
    border: 1px solid #eaeaea;
    box-sizing: border-box;
    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`;

export const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1em;
    width: 36em;

    h2 {
        font-family: var(--subTitle);
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        margin-left: 4em;
    }
`;

export const MakeQuestButton = styled(Button)`
    width: 200px;
    height: 40px;
    margin-right: 6em;

    background: var(--green-linear) !important;
    color: white !important;
    border-radius: 8px;
`;

export const Mytest = styled.div`
    width: 400px;
    height: 90px;

    background: #131826;
    opacity: 0.64;
    backdrop-filter: blur(16px);

    border-radius: 8px;

    span {
        color: #ffffff;
    }
`;
