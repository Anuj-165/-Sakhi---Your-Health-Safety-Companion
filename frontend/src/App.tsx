import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Education from './pages/Education';
import Chatbot from './pages/Chatbot';
import StoryAlert from './pages/StoryAlert';
import PeriodTracker from './pages/PeriodTracker';
import FindChemist from './pages/FindChemist';

function App() {
  return (
    <Router>
      <div className="font-inter bg-gray-50 min-h-screen">
        <Navbar />
        <motion.main 
          className="animate-fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/story-alert" element={<StoryAlert />} />
            <Route path="/period-tracker" element={<PeriodTracker />} />
            <Route path="/find-chemist" element={<FindChemist />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;