import React from 'react';
import './Dashboard.css';
import { useEffect } from 'react';

function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
    }
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload(); // Recharge la page pour revenir à la connexion
  };

  return (
    <div className="dashboard-container">
      <button className="logout-btn" onClick={handleLogout}>Déconnexion</button>
      <div className="profile-cover"></div>
      <div className="profile-content">
        <div className="profile-pic-wrapper">
          <img
            className="profile-pic"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profil"
          />
        </div>
        <h2 className="profile-name">Jean Dupont</h2>
        <div className="profile-title">Développeur Web</div>
        <div className="profile-infos">
          <div><strong>Ville :</strong> Paris</div>
          <div><strong>Email :</strong> jean.dupont@email.com</div>
          <div><strong>Téléphone :</strong> 06 12 34 56 78</div>
        </div>
        <button className="profile-edit-btn">Modifier le profil</button>
      </div>
    </div>
  );
}

export default Dashboard; 