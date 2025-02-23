import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PLLabs from './pages/PLLabs';
import UpcomingCricket from './pages/UpcomingCricket';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/labs" element={<PLLabs />} />
            <Route path="/cricket" element={<UpcomingCricket />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;