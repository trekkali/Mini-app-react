import React from 'react';

function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Enregistrement réussi</h2>
        <p>.... a le matricule N°</p>


        <h1>120 903 23</h1>
        {/* Ajoutez d'autres éléments au besoin */}
      </div>
    </div>
  );
}


export default Popup;
