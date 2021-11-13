import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import styled from "styled-components";

export const InputContent = styled.div`
    background: transparent;
    
`

export const InputHeader = styled.header`
    max-width: 359px;
    height: 71px;
    background: transparent;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    h1{
        font-family: var(--title);
        font-weight: 500;
        font-size: 3.5rem;
        background: transparent;
              
    }
`
export const TextField = styled(Input)`
    width: 60vw !important;
    height: 50px !important;
    background: var(--font-color) !important;
    
    ::placeholder{
        color: var(--placeholder);
    }

`
export const InputButton = styled(Button)`
    max-width: 256px !important;
    min-height: 50px !important;
    position: relative;
    left: 2%;
    background: var(--button-black) !important;
    color: var(--font-color);
   
    span{
        background: transparent;
        font-family: var(--title);
        font-weight: 600;
        font-size: 20px;

    }

`