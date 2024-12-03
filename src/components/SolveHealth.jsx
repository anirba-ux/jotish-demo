import React from 'react';
import { shealth } from '../assets'; // Ensure this import is unique and not repeated in other files
import { useNavigate } from "react-router-dom";

const SolveHealth = () => {
  const navigate = useNavigate();

  const handleConsultAstrologer = () => {
    navigate('/consult-astrologer', { state: { fromSolveHealth: true } });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Image Section */}
      <div className="w-full max-w-4xl">
        <img
          src={shealth}
          alt="Health Infographic"
          className="w-full max-h-96 rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <p className="text-gray-700 text-lg mt-6 max-w-4xl text-left leading-relaxed">
        These apps analyze your birth chart to offer insights into your physical constitution, energy levels, and tendencies toward specific health issues. Jyotish apps can provide daily or weekly forecasts on how planetary movements might affect your energy, mood, and overall health.
      </p>

      {/* Button Section */}
      <div className="mt-8">
        <button
          onClick={handleConsultAstrologer}
          className="bg-lime-500 text-white font-semibold text-lg px-8 py-3 rounded-lg hover:bg-lime-600 shadow-md transition duration-300"
        >
          Consult Astrologer
        </button>
      </div>
    </div>
  );
};

export default SolveHealth;
