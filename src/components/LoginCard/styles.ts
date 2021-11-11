import styled from "styled-components";
import { Input } from '@chakra-ui/input';
import { FormErrorMessage } from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/layout";

export const LoginContainer = styled.div`

`
export const LoginHeader = styled.div``

export const LoginForm = styled.form``

export const TextField = styled(Input)`
    margin-top: 2em !important;
    width: 85vw !important;
    height: 80px !important;
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
`
export const Error = styled(FormErrorMessage)`
    text-align: left;
    color: var(--redToast);
    font-size: 14px;
    opacity: 0.5;
`
export const LoginButton = styled(Button)`
    width: 85vw !important;

    margin-top: 2em !important;
    height: 80px !important;
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

    max-width: 90vw !important;
    margin-top: 1em;
    margin-bottom: 2em;
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
`;

export const RedirectTo = styled(Link)`
    color: var(--font-color);
    text-decoration: underline;
`;
