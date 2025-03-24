import React, { useState } from "react";
import Navbar from "./layout/Navbar";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <AppRoutes  />
    </div>
  );
};

export default App;