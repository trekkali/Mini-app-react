import React from 'react';

function Popup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Encaissement réussi</h2>
        <p>MR TETCHI a payé</p>

        <h1>10 000 FCFA</h1>

        <h5>et à le reçu N°</h5>

        <h1>2 3 7 6</h1>
        {/* Ajoutez d'autres éléments au besoin */}
      </div>
    </div>
  );
}

export default Popup;
