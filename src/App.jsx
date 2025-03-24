// src/App.jsx
import React from "react";
import { AnalysisProvider } from "./context/AnalysisContext";
import Navbar from "./layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <AnalysisProvider>
     
      <AppRoutes />
    </AnalysisProvider>
  );
};

export default App;