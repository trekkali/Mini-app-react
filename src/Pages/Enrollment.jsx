import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TitleSubtitle from '../Components/TitleSubtitle.jsx';
import CopyrightText from '../Components/CopyrightText';
import Popup from '../Pages/Popup.jsx'; // Importez le composant Popup
import '../Pages/Enrollment.css';

function Enrollment() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleEnregistrerClick = () => {
    // Logique pour effectuer l'encaissement

    // Afficher le pop-up
    setShowPopup(true);
  };

  return (
    <div className="enrollment-page">
      {/* Bouton Retour avec icône */}
      <Link to="/Home">
        <img
          src="/Vector 9.png"
          alt="Retour"
          className="back-icon" // Ajoutez une classe pour appliquer les styles CSS
        />
      </Link>
      
      {/* Titre et sous-titre */}
      <TitleSubtitle title="Enroler" subtitle="les contribuables" className="title" />

      {/* Formulaire d'enrôlement */}
      <form className="enrollment-form">
        
        <div>
          <input type="text" placeholder="Nom et prénom*" className="input-nom-prenom" />
        </div>
        <div className="select-container">
          <div className="select-wrapper">
            <select className="select-zone">
              <option value="" disabled selected>Zone</option>
              <option value="zone1">Zone 1</option>
              <option value="zone2">Zone 2</option>
              {/* Ajoutez plus d'options si nécessaire */}
            </select>
          </div>
          <div className="select-wrapper">
            <select className="select-secteur">
              <option value="" disabled selected>Secteur</option>
              <option value="secteurA">Secteur A</option>
              <option value="secteurB">Secteur B</option>
              {/* Ajoutez plus d'options si nécessaire */}
            </select>
          </div>
        </div>


        <div className="phone-container">
          <input type="text" placeholder="Téléphone 1" className="input-telephone" />
          <input type="text" placeholder="Téléphone 2" className="input-telephone" />
        </div>

        <div>
          <input type="text" placeholder="Montant" className="input-montant" />
        </div>

        <div className="select-container">
          <select className="select-categorie">
            <option value="" disabled selected>Catégorie</option>
            <option value="categorie1">Catégorie 1</option>
            <option value="categorie2">Catégorie 2</option>
            {/* Ajoutez plus d'options si nécessaire */}
          </select>
        </div>
        <div>
          <button className='bout' onClick={handleEnregistrerClick}>Enregistrer</button>
      </div>
      </form>

      {/* Pop-up */}
      {showPopup && <Popup onClose={handleClosePopup} />}

      {/* Composant pour le droit d'auteur */}
      <CopyrightText />
    </div>
  );
}

export default Enrollment;
