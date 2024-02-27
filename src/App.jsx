import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importez Routes et Route depuis react-router-dom
import Login from './Pages/login.jsx'; // Importez le composant Login
import HomePage from './Pages/Homepage.jsx'; // Importez le composant Accueil
import Enrollment from './Pages/Enrollment.jsx';
import Encaisser from './Pages/Encaisser.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Utilisez le composant Routes pour envelopper toutes vos routes */}
      <Routes>
        {/* Utilisez Route pour définir la correspondance entre le chemin et le composant */}
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/Encaisser" element={<Encaisser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
