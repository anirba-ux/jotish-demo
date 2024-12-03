import React from "react";
import { wcareer } from "../assets"; // Ensure the correct path to your image asset
import { useNavigate } from "react-router-dom";

const SolveCareer = () => {
    const navigate = useNavigate();
    

    // Handler for navigating to the Consult Astrologer page with state
    const handleConsultAstrologer = () => {
      navigate('/consult-astrologer', { state: { fromSolveCareer: true } });
    };
    
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex justify-between items-center ">
            {/* Icon */}
      <img
        src={wcareer}
        alt="Career Icon"
        className="flex items-center h-80 w-60 space-x-4 mb-10"
      />

      {/* Heading */}
      <h1 className="text-7xl font-bold mb-4 ml-16 max-w-full">
        Worry About <span className="text-orange-500">Career</span>?
      </h1>
        </div>
      

      {/* Description */}
      <p className="text-gray-700 text-left  max-w-6xl font-bold leading-relaxed">
        Illuminate your career path with expert astrology guidance. Facing uncertainty? 
        Our trusted astrologers provide personalized solutions, aligning your stars for success. 
        Explore career forecasts, remedies, and insights tailored to your potential. Let Jyotish Aloy 
        empower your ambitions and guide you toward a prosperous professional future.
      </p>
      <button 
          onClick={handleConsultAstrologer} 
        className="bg-lime-400 text-black font-semibold px-6 py-2 rounded hover:bg-lime-500 mt-10">
          Consult Astrologer
        </button>
    </div>
  );
};

export default SolveCareer;
