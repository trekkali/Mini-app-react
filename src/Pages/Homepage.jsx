import React from 'react';
import { Link } from 'react-router-dom';
import CopyrightText from '../Components/CopyrightText.jsx'; // Importez le composant CopyrightText
import './Homepage.css';
import Card from 'react-bootstrap/Card';

function HomePage() {
  return (
    <div className='home-page'>
      <div className="logo-contain">
        <img className="logo" src="/logo.png" alt="Logo de l'application" />
      </div>

      <div className="grid-container">
        <a href="/enrollment" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '10rem', cursor: 'pointer', background: '#CCCCCC33' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
          <div style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
            <img src="hommes.png" alt="Icône" style={{ width: '35px', height: '35px' }} />
          </div>
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Enroller</Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
            Enregistrer les contribuables
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
    <a href="/Encaisser" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '10rem', cursor: 'pointer', background: '#CCCCCC33' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
          <div style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
            <img src="Wallet@3x.png" alt="Icône" style={{ width: '35px', height: '35px' }} />
          </div>
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Encaisser</Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
            Encaisser les contribuables
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '10rem', cursor: 'pointer', background: '#CCCCCC33' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
          <div style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
            <img src="Line_up@3x.png" alt="Icône" style={{ width: '35px', height: '35px' }} />
          </div>
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Rapports</Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
          Consulter les rapports
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '10rem', cursor: 'pointer', background: '#CCCCCC33' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
          <div style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
            <img src="User@3x.png" alt="Icône" style={{ width: '35px', height: '35px' }} />
          </div>
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Comptes</Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
          Créer comptes utilisateurs
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '10rem', cursor: 'pointer', background: '#CCCCCC33' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
          <div style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
            <img src="Done_ring_round_light@3x.png" alt="Icône" style={{ width: '35px', height: '35px' }} />
          </div>
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Contrôler</Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
          Contrôler les contribuables
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ width: '10rem', cursor: 'pointer', background: '#CCCCCC33' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
          <div style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
            <img src="Money_fill@3x.png" alt="Icône" style={{ width: '35px', height: '35px' }} />
          </div>
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Decaisser</Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
          Effectuer les décaissements
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <CopyrightText />
      </div>
    </div>
  );
}

export default HomePage;
