import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs'; // Importer l'icône de Bootstrap
import { BsLockFill } from 'react-icons/bs';
import CopyrightText from '../Components/CopyrightText.jsx';
import './login.css';

function LoginPage() {
  return (
    <div className="login-page">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src="/logo.png" alt="Logo de l'application" />
      </div>
      {/* Formulaire de connexion */}
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username"></label>
          <div className="input-group">
            <span className="input-group-text">
              <BsPersonFill /> {/* Icône Bootstrap */}
            </span>
            <input
              type="text"
              className="form-control input"
              id="username"
              placeholder="Votre Login"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <div className="input-group">
            <span className="input-group-text">
              <BsLockFill /> {/* Icône Bootstrap pour le mot de passe */}
            </span>
            <input
              type="password"
              className="form-control input"
              id="password"
              placeholder="Votre mot de passe"
            />
          </div>
        </div>
        <div className="form-group">
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="exampleCheckbox"/>
  <label class="form-check-label" for="exampleCheckbox">
    Se rappeler de moi
  </label>
</div>
  
</div>
<Link to="/Home" className="btn btn-primary">Connection</Link>

      </form>

      {/* Composant pour le droit d'auteur */}
      <CopyrightText />
    </div>
  );
}

export default LoginPage;
