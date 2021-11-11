import { Flex,Text,Heading,Image } from "@chakra-ui/react";
const Login = () => {
  return <>
    <Flex 
    height="100vh"
    width="100%"
    justifyContent="flex-start"
    alignItems="center"
    background="var(--background)"
    >
    
    <Flex flexDirection="column" alignItems="center"
    justifyContent="center"
    width="100%"
    maxWidth="700px">
      <Heading fontWeight="400" color="var(--font-color)" fontSize="48px">Entre com a sua conta</Heading>
      <Text color="var(--font-color)" fontSize="24px">Planeje o seu dia!</Text>
    </Flex>

    </Flex>
  </>;
};

export default Login;
