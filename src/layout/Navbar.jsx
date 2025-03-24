// src/layout/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      {/* Left: Brand Name */}
      <div className="text-xl font-bold text-gray-800">
        FeelAnalyze
      </div>

      {/* Right: Nav Links */}
      <div className="space-x-6">
        {/* Use NavLink for active styles, or Link if you prefer */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-brandBlue font-semibold" : "text-gray-700"
          }
        >
          Upload
        </NavLink>
        <NavLink
          to="/analysis"
          className={({ isActive }) =>
            isActive ? "text-brandBlue font-semibold" : "text-gray-700"
          }
        >
          Analysis
        </NavLink>
        <NavLink
          to="/sentiment-analysis"
          className={({ isActive }) =>
            isActive ? "text-brandBlue font-semibold" : "text-gray-700"
          }
        >
          Sentiment
        </NavLink>
        <NavLink
          to="/final-report"
          className={({ isActive }) =>
            isActive ? "text-brandBlue font-semibold" : "text-gray-700"
          }
        >
          Report
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;