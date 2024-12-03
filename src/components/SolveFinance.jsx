import React from "react";
import { finance1, finance2, finance3 } from "../assets";
import { useNavigate } from "react-router-dom";

const SolveFinance = () => {
  const navigate = useNavigate();

  const handleConsultAstrologer = () => {
    navigate('/consult-astrologer', { state: { fromSolveFinance: true } });
  };

  const financeData = [
    {
      title: "ASK QUESTION ON FINANCE",
      description:
        "If you have a serious question related to wealth, money or finance of any sort then you need to go for this single question report which would provide you the answer based on the unique astrology of Prashna (horary) kundli. Remedies would also be suggested to improve the destiny. Get answers related to your finances.",
      image: finance1, // Correct usage
    },
    {
      title: "FINANCE REPORT",
      description:
        "Why remain in dark when you can come to know what the future holds for you. Find out how the finances are going to be in the coming years and also how the things are going even in the far of years. Improve your wealth, get to know the periods of gains, make the best use of the favorable transit and dasha of planets.",
      image: finance2, // Correct usage
    },
    {
      title: "SPECULATION REPORT",
      description:
        "The speculation report is based on the natal chart which is drawn in accordance to your date of birth, time of birth and place of birth. You get to know if your horoscope has good planetary combinations for gain through speculations or not. The good and the bad periods would also be mentioned in the speculation report which would help you decide accordingly.",
      image: finance3, // Correct usage
    },
  ];

  

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        FINANCE
      </h1>

      {/* Finance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {financeData.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="rounded-t-lg w-full object-cover mb-4"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-center text-gray-700">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm text-center mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Consult Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleConsultAstrologer}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 font-semibold"
        >
          Consult Astrologer
        </button>
      </div>
    </div>
  );
};

export default SolveFinance;
