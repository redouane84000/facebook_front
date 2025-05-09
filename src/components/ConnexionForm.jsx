import React, { useState, useEffect } from 'react';
import './ConnexionForm.css';
 

function ConnexionForm({ onBack, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('https://facebookprojet-production.up.railway.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if(!response.ok){
        throw new Error(data.message || 'Connexion failed');
      }
      if(data.token) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        alert(data.message);
        if (onSubmit) onSubmit();
      }
    } catch (error) {
      console.error('Connexion failed:', error.message);
      alert(error.message);
    }
    
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="connexion-form-container">
      <button className="fb-back" onClick={onBack}>← Retour</button>
      <form className="connexion-form" onSubmit={handleSubmit}>
        <h2>Connexion à Facebook</h2>
        <input
          type="email"
          placeholder="Adresse e-mail ou numéro de mobile"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="fb-btn fb-btn-connexion" type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default ConnexionForm; 