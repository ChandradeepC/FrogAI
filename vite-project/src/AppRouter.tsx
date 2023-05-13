import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './LandingPage';
import Monitors101 from './Monitors101';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<LandingPage />} /> */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/recommender" element={<App />} />
                <Route path="/crash-course" element={<Monitors101 />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
