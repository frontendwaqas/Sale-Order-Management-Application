import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = (data) => {
    login(data.username, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" {...register("username")} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password")} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="md">
          Login
        </Button>
      </VStack>
    </form>
  );
};

export default LoginForm;
