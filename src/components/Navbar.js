import React from "react";
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box bg="teal.500" p={4}>
      <Flex>
        <Heading size="md" color="white">
          Sale Order Management
        </Heading>
        <Spacer />
        <ThemeToggle />
        {isAuthenticated && (
          <Button colorScheme="teal" ml={4} onClick={logout}>
            Logout
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
