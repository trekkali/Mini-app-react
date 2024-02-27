import React, { useState } from 'react';
import TitleSubtitle from '../Components/TitleSubtitle.jsx';  
import CopyrightText from '../Components/CopyrightText.jsx'; 
import Popup1 from '../Pages/Popup1.jsx'; // Importez le composant Popup1
import '../Pages/styles1.css'; // Importez les styles CSS
import "../Pages/Encaisser.css"
function EncaisserPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleEncaisserClick = () => {
    // Logique pour effectuer l'encaissement

    // Afficher le pop-up
    setShowPopup(true);
  };

  return (
    <div className="encaisser-page">
      {/* Titre et sous-titre */}
      <TitleSubtitle title="Encaisser" subtitle="les contribuables" />
      
      {/* Champ de saisie pour le matricule */}
      <div>
        <input type="text" placeholder="Matricule" className="matricule-input" />
      </div>
      
      {/* Bouton "Encaisser" */}
      <div>
        <button className='bout' onClick={handleEncaisserClick}>Encaisser</button>
      </div>
      
      {/* Pop-up */}
      {showPopup && <Popup1 onClose={handleClosePopup} />}
      
      {/* Composant pour le droit d'auteur */}
      <CopyrightText />
    </div>
  );
}

export default EncaisserPage;
