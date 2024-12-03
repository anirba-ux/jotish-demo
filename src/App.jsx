import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Pages/Store"; 
import Blog from './Pages/Blog';
import Horoscope from './Pages/Horoscope';
import ConsultAstrologer from './Pages/ConsultAstrologer';
import KundliMatching from './Pages/KundliMatching';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import KundliNavbar from "./components/KundliNavbar";
import '@fontsource/caveat/400.css';
import '@fontsource/caveat/700.css';
import './index.css';
import SolveLove from './components/SolveLove';
import SolveCareer from './components/SolveCareer';
import SolveFinance from './components/SolveFinance';
import SolveHealth from './components/SolveHealth';
import SolveEducation from './components/SolveEducation';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render Home only on the root path */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/consult-astrologer" element={<ConsultAstrologer />} />
        <Route path="/Kundli-matching" element={<KundliMatching />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/store" element={<Store />} />
        <Route path="/kundli-navbar" element={<KundliNavbar />} />
        {/* <Route path="/products" element={<ProductsPage />} /> Assuming you have a ProductsPage */}
        {/* Main Culprit is the Above line for re rendering of home objects again in store , Home also should be
     like this */}
        <Route path="/kundli-navbar/:solve-love" element={<SolveLove />} />
        <Route path="/kundli-navbar/:solve-career" element={<SolveCareer />} />
        <Route path="/kundli-navbar/:solve-finance" element={<SolveFinance />} />
        <Route path="/kundli-navbar/:solve-health" element={<SolveHealth />} />
        <Route path="/kundli-navbar/:solve-education" element={<SolveEducation />} />
        

      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;