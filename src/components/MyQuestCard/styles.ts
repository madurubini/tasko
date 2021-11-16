import { BiCommentDetail } from 'react-icons/bi';
import { GiHearts } from 'react-icons/gi';
import { MdOutlineEditNote } from 'react-icons/md';
import styled from 'styled-components';

export const Card = styled.div`
    width: 80vw;
    height: 90px;
    margin: 1em 0;
    margin-inline: auto;

    background: #131826;
    box-sizing: border-box;
    backdrop-filter: blur(16px);
    opacity: 0.64;

    border-radius: 8px;

    span {
        color: #ffffff;
    }

    @media (min-width: 1024px) {
        width: 32vw;
    }
`;

export const LineTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Body = styled.p`
    max-width: 100%;
    padding: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SpanCommentsLength = styled.span`
    color: white;
`;

export const MyLikes = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    margin-top: 1em;
`;

export const Likes = styled(GiHearts)`
    margin: 0 10px;
    color: var(--redToast);
`;

export const EditIcons = styled(MdOutlineEditNote)`
    margin: 0 10px;
    color: var(--yellowToast);
    font-size: 25px;
`;

export const CommentIcons = styled(BiCommentDetail)`
    margin: 0 10px;
    color: var(--greenToast);
    font-size: 20px;
`;
