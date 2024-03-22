import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Input,Button, Checkbox} from '@material-tailwind/react';
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import CopyrightText from '../Components/CopyrightText';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/Home");
      })
      .catch((error) => {
        console.error('Erreur de connexion: ', error.message);
        alert('erreur :' + error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="text-center">
          <img className="mx-auto w-14 h-14 mb-4" src="/logo.png" alt="Logo de l'application" />
        </div>
        <form className="mt-8" onSubmit={handleLogin}>
        <div className="w-full mb-8">
              <Input label="Votre login" icon={<i className="material-icons">person</i>} placeholder=" " type="email"
              color="gray"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="w-full ">
              <Input label="Votre mot de passe" icon={<i className="material-icons">lock</i>} placeholder=" " type="password"
              color="gray"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
        </div>
          <div className="flex items-center mb-3">
            <Checkbox color="dark" />
            <label className="ml-2 text-sm text-gray-600">Se rappeler de moi</label>
          </div>
          <Button style={{ fontFamily: 'Poppins , sans-serif' }}
            color="black"
            size="lg"
            type="submit"
            ripple="light"
            className="w-full"
          >
            Connexion
          </Button>
          <div className="text-sm text-center mt-4">
            <Link to="/password-reset" className="font-medium text-dark-600 hover:text-blue-500">
              Mot de passe oublié ?
            </Link>
          </div>
        </form>
      </div>
      <div className="text-center mt-50">
       <CopyrightText/>
      </div>
      </div>
    
  );
}

export default LoginPage;
