import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import Home from './Pages/Homepage.jsx';
import Enrollment from './Pages/Enrollment.jsx';
import Encaisser from './Pages/Encaisser.jsx';
import PasswordResetPage from './Pages/PasswordResetPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/Encaisser" element={<Encaisser />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
