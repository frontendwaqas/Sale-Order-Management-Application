import React from "react";
import { Box, Heading, Center } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Center height="100vh">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Login</Heading>
        <LoginForm />
      </Box>
    </Center>
  );
};

export default LoginPage;
