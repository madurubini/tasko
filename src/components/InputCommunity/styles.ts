import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import styled from 'styled-components';

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--green-linear);
    height: 250px;
    gap: 12px;
`;

export const InputHeader = styled.header`
    max-width: 359px;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const InputTitle = styled.h2`
    font-family: var(--title);
    font-weight: 500;
    font-size: 32px;
    background: transparent;
`;

export const InputTypes = styled.div`
    display: flex;
    flex-direction: column;

    gap: 10px;

    @media screen and (min-width: 606px) {
        flex-direction: row;
    }
`;

export const TextField = styled(Input)`
    width: 60vw !important;
    height: 50px !important;
    background: var(--font-color) !important;
    color: #050303;

    ::placeholder {
        color: #050303 !important;
    }

    :focus::placeholder {
        opacity: 0;
        transform: translateX(5px);
        transition: 0.3s;
    }
`;
