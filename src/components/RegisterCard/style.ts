import { Button } from '@chakra-ui/button';
import { FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Divider } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-height: 100vh;
    padding: 10px;
    margin: 5px;

    @media (min-width: 1024px) {
        width: 46%;
    }

    @media (min-width: 1440px) {
        width: 33%;
    }

    @media (min-width: 2560px) {
        width: 26%;
    }
`;

export const RegisterHeader = styled.header`
    text-align: center;
`;

export const Title = styled.h1`
    font-family: Inter;
    font-weight: normal;
    font-size: 32px;
    line-height: 58px;
    color: var(--font-color);
    margin: 0 auto;
    width: 6em;
`;

export const SubTitle = styled.p`
    font-family: Inter;
    opacity: 0.5;
    font-size: 18px;
    line-height: 29px;
    color: var(--font-color);
    width: 12em;
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextField = styled(Input)`
    margin-top: 1em !important;
    width: 85vw !important;
    height: 60px !important;
    background-color: var(--input-background) !important;

    ::placeholder {
        color: var(--placeholder) !important;
    }

    :focus::placeholder {
        opacity: 0;
        transform: translateX(5px);
        transition: 0.3s;
    }

    :nth-last-child(1) {
        margin-top: none !important;
    }

    @media (min-width: 768px) {
        width: 65vw !important;
    }

    @media (min-width: 1024px) {
        display: block !important;

        width: 420px !important;
    }
`;

export const Error = styled(FormErrorMessage)`
    text-align: left;
    color: var(--redToast);
    font-size: 14px;
    opacity: 0.5;
`;

export const RegisterButton = styled(Button)`
    width: 85vw !important;

    margin-top: 1em !important;
    height: 60px !important;
    background: var(--green-linear) !important;
    color: var(--font-color) !important;

    @media (min-width: 768px) {
        width: 65vw !important;
    }

    @media (min-width: 1024px) {
        display: block !important;

        width: 420px !important;
    }
`;

export const DividerBlock = styled.div`
    display: flex;
    align-items: center;

    max-width: 90vw !important;
    margin-top: 1em;
    margin-bottom: 1em;
`;

export const Hr = styled(Divider)`
    width: 144px !important;

    @media (max-width: 412px) {
        width: 7rem !important;
    }

    @media (min-width: 1024px) {
        width: 11rem !important;
    }
`;

export const RegisterOption = styled.pre`
    ::before {
        content: ' ';
    }

    ::after {
        content: ' ';
    }
`;

export const TextOptions = styled.p`
    margin-bottom: 0.5em;
    width: 15em;
`;

export const RedirectTo = styled(Link)`
    color: var(--font-color);
    text-decoration: underline;
`;
