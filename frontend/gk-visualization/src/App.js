import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // Import LoginPage
import DashboardPage from './pages/DashboardPage'; // Import DashboardPage
import ViewFeedbackPage from './pages/ViewFeedbackPage';
import GiveFeedbackPage from './pages/GiveFeedBackPage';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Route cho trang chủ (mặc định là LoginPage) */}
                <Route path="/" element={<LoginPage />} />

                {/* Route cho trang đăng nhập */}
                <Route path="/login" element={<LoginPage />} />

                {/* Route cho trang feedback */}
                <Route path="/view-feedback" element={<ViewFeedbackPage/>} />

                <Route path="/give-feedback" element={<GiveFeedbackPage/>} />


                {/* Route cho trang dashboard */}
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    );
};

export default App;