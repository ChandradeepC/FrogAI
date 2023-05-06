import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './LandingPage';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/recommender" element={<App />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
