import React, { useState } from 'react'
import Accueil from './components/Accueil'
import ConnexionForm from './components/ConnexionForm'
import InscriptionForm from './components/InscriptionForm'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [view, setView] = useState('accueil')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleConnexion = (credentials) => {
    setIsAuthenticated(true)
  
  }

  const handleInscription = (data) => {
    setIsAuthenticated(false)
    setView('connexion');
    
  }

  if (isAuthenticated) {
    return <Dashboard />
  }

  return (
    <div>
      {view === 'accueil' && (
        <Accueil
          onConnexion={() => setView('connexion')}
          onInscription={() => setView('inscription')}
        />
      )}
      {view === 'connexion' && (
        <ConnexionForm
          onBack={() => setView('accueil')}
          onSubmit={handleConnexion}
        />
      )}
      {view === 'inscription' && (
        <InscriptionForm
          onBack={() => setView('accueil')}
          onSubmit={handleInscription}
        />
      )}
    </div>
  )
}

export default App
