import React from 'react';
import './Accueil.css';

function Accueil({ onConnexion, onInscription }) {
  return (
    <div className="accueil-container">
      <div className="fb-logo">f</div>
      <h1 className="fb-title">Facebook</h1>
      <p className="fb-slogan">Avec Facebook, partagez et restez en contact avec votre entourage.</p>
      <div className="fb-buttons">
        <button className="fb-btn fb-btn-connexion" onClick={onConnexion}>Connexion</button>
        <button className="fb-btn fb-btn-inscription" onClick={onInscription}>Inscription</button>
      </div>
    </div>
  );
}

export default Accueil; 