import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import Loader from './components/common/Loader/Loader';
import { ThemeProvider } from './context/ThemeContext';
import { SliderProvider } from './context/SliderContext';

const App = () => {
  return (
    <Loader>
    <ThemeProvider>
      <SliderProvider>
        <Router>
          <div className="app-shell">
            <Header />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<Navigate to="/#about" replace />} />
                <Route path="/projects" element={<Navigate to="/#projects" replace />} />
                <Route path="/skills" element={<Navigate to="/#skills" replace />} />
                <Route path="/gallery" element={<Navigate to="/#certificates" replace />} />
                <Route path="/certificates" element={<Navigate to="/#certificates" replace />} />
                <Route path="/contact" element={<Navigate to="/#contact" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </SliderProvider>
    </ThemeProvider>
    </Loader>
  );
};

export default App;
