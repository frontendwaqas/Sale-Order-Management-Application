import React, { createContext, useState, useContext, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [theme, setTheme] = useState(colorMode);

  useEffect(() => {
    setTheme(colorMode);
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
