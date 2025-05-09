import React, { useState } from 'react';
import './InscriptionForm.css';

function InscriptionForm({ onBack, onSubmit }) {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ prenom, nom, email, password });
  };

  const inscription = async () => {
    console.log("inscription");

    try {
      const response = await fetch('https://facebookprojet-production.up.railway.app/api/register', {
        method: 'POST',
        body: JSON.stringify({ prenom, nom, email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      console.log(data);
      
      if (!response.ok) {
        throw new Error(data.message || 'Inscription failed');     
      }
      
      console.log('Inscription successful:', data);
      alert(data.message);
      onSubmit();
    } catch (error) { 
      console.error('Inscription failed:', error.message);
      alert(error.message);
    }   
  };

  return (
    <div className="inscription-form-container">
      <button className="fb-back" onClick={onBack}>← Retour</button>
      <form className="inscription-form" onSubmit={(e) => {
        e.preventDefault();
        inscription();
      } }>
        <h2>Inscription sur Facebook</h2>
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom de famille"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="fb-btn fb-btn-inscription" type="submit" >Inscription</button>
      </form>
    </div>
  );
}

export default InscriptionForm; 