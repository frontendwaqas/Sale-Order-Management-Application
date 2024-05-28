import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SaleOrdersPage from "./pages/SaleOrdersPage";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/orders" /> : <LoginPage />}
        />
        <Route
          path="/orders"
          element={isAuthenticated ? <SaleOrdersPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Box>
  );
}

export default App;
