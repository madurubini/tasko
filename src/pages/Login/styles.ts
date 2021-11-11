import styled from "styled-components"
import login from "../../assets/login.svg"

export const Background = styled.div`
    @media (min-width:1024px){
        background: url(${login}) no-repeat center;
        width: 100%;
        height: 100%;
    }
`

export const Content = styled.div`
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-weight: 400;
        color: var(--font-color);
        font-size: 48px;
    }

    span{
        color:var(--font-color);
        font-size:24px;
    }

`

{/* <Heading 
      fontWeight="400" 
      color="var(--font-color)" 
      fontSize="48px">Entre com a sua conta</Heading> */}