import { Button } from '@chakra-ui/button';
import { Divider } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

export const ContainerBoxModal = styled.div`
    min-width: 100vw;
    position: fixed;
    z-index: 1;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0px;
`;

export const CloseModal = styled(MdClose)`
    font-size: 30px;
    color: var(--background);
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    border-radius: 100%;
    background: var(--green-linear);
    width: 30px;
    height: 30px;

    :hover {
        background: var(--redToast);
        filter: brightness(0.8);
    }
`;

export const Form = styled.div`
    min-width: 300px;
    min-height: 300px;
    min-height: 200px;
    width: 90%;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    background: var(--black-gradient);
    border-radius: 20px;
    position: relative;

    @media (min-width: 768px) {
        max-width: 600px;
        width: 90%;
        height: 75%;
    }

    @media (min-width: 1024px) {
        width: 85%;
        height: 80%;
    }

    @media (min-width: 1440px) {
        width: 42%;
    }
`;

export const FormBlock = styled.div`
    height: 10em;
    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        width: 85%;
        height: 5em;
    }
`;

export const InputField = styled(Textarea)`
    width: 80% !important;
    height: 30% !important;
    margin: 3em 1em 1em 1em !important;
    padding: 5px !important;

    color: white !important;

    @media (min-width: 768px) {
        width: 100% !important;
        margin: 3em 0 1em 0 !important;
    }

    @media (min-width: 1024px) {
        height: 80% !important;
        margin: 0 0.5em !important;
    }
`;

export const MenuButton = styled(Button)`
    width: 80% !important;
    height: 25% !important;
    background: var(--green-linear) !important;
    color: var(--background) !important;

    @media (min-width: 768px) {
        width: 100% !important;
    }

    @media (min-width: 1024px) {
        width: 20% !important;
        height: 60% !important;
        margin: 0 0.5em !important;
    }
`;

export const DividerBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 18.5em !important;
    margin: 1em auto;

    @media (min-width: 768px) {
        max-width: 35em !important;
    }
`;

export const HrForm = styled(Divider)`
    width: 10em !important;

    @media (min-width: 768px) {
        width: 13.5rem !important;
    }

    @media (min-width: 1024px) {
        width: 28rem !important;
    }
`;

export const Title = styled.pre`
    opacity: 0.7;
    color: white;

    ::before {
        content: ' ';
    }

    ::after {
        content: ' ';
    }
`;

export const SpanCommentsLength = styled.span`
    color: white;
`;

export const SectionComments = styled.section`
    overflow: scroll;

    @media (min-width: 768px) {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Comment = styled.div`
    display: flex;
    align-items: center;

    width: 80vw;
    min-height: 64px;
    margin: 1em 0;
    padding-left: 10px;

    text-align: start;
    background: #131826;
    backdrop-filter: blur(16px);
    border-radius: 8px;

    @media (min-width: 768px) {
        max-width: 95%;
    }

    @media (min-width: 1024px) {
        width: 42vw;
    }
`;
