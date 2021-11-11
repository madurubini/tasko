import { Flex,Text,Heading, Box,Button,Divider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Background, Content } from "./styles";
const Login = () => {
  return <>
    <Flex 
    height="100vh"
    width="100%"
    justifyContent="flex-start"
    alignItems="center"
    background="var(--background)"
    >
    <Content>
      <h1>Entre com a sua conta</h1>
      <span>Planeje seu dia </span>
      <Input 
      
      placeholder="Email" 
      margin="10px" 
      border="none" 
      background="var(--input-background)" 
      maxWidth="480px" height="81px"/>
      <Input 
      placeholder="Senha" 
      margin="10px" 
      border="none" 
      background="var(--input-background)" 
      maxWidth="480px" height="81px"/>

    </Content>
      <Box width="560px" height="560px" >
          <Background />
      </Box>
    </Flex>
  </>;
};

export default Login;
