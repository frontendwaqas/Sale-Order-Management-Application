import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Switch } from "@chakra-ui/react";

const ThemeToggle = () => {
  const { theme, toggleColorMode } = useTheme();

  return <Switch isChecked={theme === "dark"} onChange={toggleColorMode} />;
};

export default ThemeToggle;
