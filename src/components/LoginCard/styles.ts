import styled from 'styled-components';
import { Input, InputRightElement } from '@chakra-ui/input';
import { FormErrorMessage } from '@chakra-ui/form-control';
import { Link } from 'react-router-dom';
import { Divider } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

export const LoginContainer = styled.div`
    text-align: center;
`;

export const LoginHeader = styled.div`
    text-align: center;

    h1 {
        font-family: Inter;
        font-weight: normal;
        font-size: 32px;
        line-height: 58px;
        color: var(--font-color);
    }

    p {
        font-family: Inter;
        opacity: 0.5;
        font-size: 18px;
        line-height: 29px;
        color: var(--font-color);
    }
`;

export const LoginForm = styled.form``;

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

    @media (min-width: 1024px) {
        display: block !important;

        width: 480px !important;
    }
`;

export const ShowButton = styled(InputRightElement)`
    top: 30px !important;
    right: 15px !important;
    background: none !important;
`;

export const PasswordButton = styled(Button)`
    background-color: transparent !important;

    svg,
    svg path {
        background-color: transparent !important;
        font-size: 24px;
        transition: all 0.3s;
    }
`;

export const Error = styled(FormErrorMessage)`
    text-align: left;
    color: var(--redToast);
    font-size: 14px;
    opacity: 0.5;
`;

export const LoginButton = styled(Button)`
    width: 85vw !important;
    margin-top: 1em !important;
    height: 60px !important;
    background: var(--green-linear) !important;
    color: var(--font-color) !important;

    @media (min-width: 1024px) {
        display: block !important;
        width: 480px !important;
    }
`;
export const DividerBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90vw !important;
    margin: 1em auto;
`;

export const Hr = styled(Divider)`
    width: 144px !important;

    @media (min-width: 1024px) {
        width: 210px !important;
    }
`;

export const LoginOption = styled.pre`
    ::before {
        content: ' ';
    }

    ::after {
        content: ' ';
    }
`;

export const TextOptions = styled.p`
    margin-bottom: 0.5em;
    text-align: center;
`;

export const RedirectTo = styled(Link)`
    color: var(--font-color);
    text-decoration: underline;
`;
