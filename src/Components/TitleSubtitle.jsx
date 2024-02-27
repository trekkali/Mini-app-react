// TitleSubtitle.jsx

import React from 'react';
import './TitleSubtitle.css'; // Assurez-vous d'importer votre fichier de style CSS

function TitleSubtitle({ title, subtitle }) {
  return (
    <div className="title-subtitle">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  );
}

export default TitleSubtitle;
