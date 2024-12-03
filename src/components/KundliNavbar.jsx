import React, { useState } from "react";
import love from "../assets/LoveLogo.png";
import marriage from "../assets/MarrageLogo.png";
import career from "../assets/CareerLogo.png";
import finance from "../assets/FinanceLogo.png";
import health from "../assets/HealthLogo.png";
import education from "../assets/EducationLogo.png";
import child from "../assets/ChildLogo.png";
import SolveLove from "../components/SolveLove";
import SolveCareer from "../components/SolveCareer";
import SolveFinance from "./SolveFinance";
import SolveHelath from "./SolveHealth";
import SolveEducation from "./SolveEducation";
// Import other components for different sections
// import SolveMarriage from "../components/SolveMarriage";
// import SolveCareer from "../components/SolveCareer";
// Add imports for remaining sections as needed

const KundliNavbar = () => {
  const menuItems = [
    { name: "Love", icon: love },
    { name: "Marriage", icon: marriage },
    { name: "Career", icon: career },
    { name: "Finance", icon: finance },
    { name: "Health", icon: health },
    { name: "Education", icon: education },
    { name: "Child", icon: child },
  ];

  // State to track the active section
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="bg-white shadow-md">
      {/* Title Section */}
      <div className="text-center py-4 border-b">
        <h1 className="text-3xl font-bold font-protest tracking-wide">
          KUNDLI <span className="text-red-500">MATCHING</span>
        </h1>
      </div>

      {/* Icons Section */}
      <div className="py-4 px-4 border-t-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setActiveSection(item.name)} // Set active section
              className="flex flex-col items-center space-y-2 text-center font-title font-bold hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="h-12 w-12"
              />
              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conditional Rendering of Components */}
      <div className="py-4 px-4">
        {activeSection === "Love" && <SolveLove />}
        {/* Uncomment the following lines and add components for other sections */}
        {/* {activeSection === "Marriage" && <SolveMarriage />} */}
        {activeSection === "Career" && <SolveCareer />}
        {activeSection === "Finance" && <SolveFinance />}
        {activeSection === "Health" && <SolveHelath />}
        {activeSection === "Education" && <SolveEducation />}
        {/* {activeSection === "Child" && <div>Child Section</div>} */}
      </div>
    </div>
  );
};

export default KundliNavbar;
