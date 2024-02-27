import React from 'react';
import { Link } from 'react-router-dom';
import CopyrightText from '../Components/CopyrightText.jsx'; // Importez le composant CopyrightText
import './Homepage.css';

function HomePage() {
  return (
    <div className='home-page'>
      <div className="logo-contain">
        <img className="logo" src="/logo.png" alt="Logo de l'application" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', justifyContent: 'center', padding: '20px' }}>
        <Link to="/enrollment" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '20px', textAlign: 'center', cursor: 'pointer', background: '#CCCCCC33', outline: 'none', borderRadius: '5px', overflow: 'hidden' }}>
            <div className="icon-container">
              <img src="hommes.png" alt="Icône 1" />
            </div>
            <h1>Enroller</h1>
            <p>Enregistrer les contribuables</p>
          </button>
        </Link>
        <Link to="/Encaisser" style={{ textDecoration: 'none' }}> {/* Lien vers la page "Encaisser" */}
          <button style={{  padding: '20px', textAlign: 'center', cursor: 'pointer', background: '#CCCCCC33', outline: 'none', borderRadius: '5px', overflow: 'hidden' }}>
            <div className="icon-container">
              <img src="Wallet@3x.png" alt="Icône 2" />
            </div>
            <h1>Encaisser</h1>
            <p>Encaisser les contribuables</p>
          </button>
        </Link>
        <button style={{ padding: '20px', textAlign: 'center', cursor: 'pointer', background: '#CCCCCC33', outline: 'none', borderRadius: '5px', overflow: 'hidden' }}>
          <div className="icon-container">
            <img src="Line_up@3x.png" alt="Icône 3" />
          </div>
          <h1>Rapports</h1>
          <p>Consulter les rapports</p>
        </button>
        <button style={{  padding: '20px', textAlign: 'center', cursor: 'pointer', background: '#CCCCCC33', outline: 'none', borderRadius: '5px', overflow: 'hidden' }}>
          <div className="icon-container">
            <img src="User@3x.png" alt="Icône 4" />
          </div>
          <h1>Comptes</h1>
          <p>Créer les comptes utilisateurs</p>
        </button>
        <button style={{ padding: '20px', textAlign: 'center', cursor: 'pointer',background: '#CCCCCC33', outline: 'none', borderRadius: '5px', overflow: 'hidden' }}>
          <div className="icon-container">
            <img src="Done_ring_round_light@3x.png" alt="Icône 5" />
          </div>
          <h1>Controler</h1>
          <p>Contrôler les contribuables</p>
        </button>
        <button style={{  padding: '20px', textAlign: 'center', cursor: 'pointer', background: '#CCCCCC33', outline: 'none', borderRadius: '5px', overflow: 'hidden' }}>
          <div className="icon-container">
            <img src="Money_fill@3x.png" alt="Icône 6" />
          </div>
          <h1>Decaisser</h1>
          <p>Effectuer les décaissements</p>
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <CopyrightText />
      </div>
    </div>
  );
}

export default HomePage;
