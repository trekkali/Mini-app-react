import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '@material-tailwind/react';
import { auth } from '../firebase-config';
import { sendPasswordResetEmail } from 'firebase/auth';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {resetSent ? (
        <p>Un email de réinitialisation du mot de passe a été envoyé à {email}.</p>
      ) : (
        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
            <div className="mt-1">
              <Input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre adresse e-mail"
                className="w-full" // Appliquer la même largeur que l'input
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              color="black"
              size="regular"
              ripple="light"
              className="w-full" // Appliquer la même largeur que l'input
            >
              Réinitialiser le mot de passe
            </Button>
          </div>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      )}
      {/* Lien de retour vers la page de connexion */}
      <div className="text-center mt-4">
        <Link to="/" className="text-dark-500 hover:text-blue-700">Retour à la page de connexion</Link>
      </div>
    </div>
  );
}

export default PasswordReset;
