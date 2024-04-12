import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { Navbar, Typography, Button } from '@material-tailwind/react';
import { BsList } from 'react-icons/bs'; // Importation de l'icône de menu
import CopyrightText from '../Components/CopyrightText.jsx';

function HomePage() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Déconnexion réussie');
        alert('Déconnexion réussie');
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar className="bg-black">
        <div className="flex items-center justify-between w-full">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="cursor-pointer py-1.5 mr-auto text-white"
          >
            Goblo
          </Typography>
          <div className="hidden lg:flex items-center ml-auto">
            <Typography
              as="a"
              href="#"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Mon Compte
            </Typography>
            <Typography
              as="a"
              href="#"
              variant="body"
              className="text-white cursor-pointer"
              onClick={handleLogout}
            >
              Déconnexion
            </Typography>
          </div>
          <BsList
            className="block lg:hidden text-white cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {showMenu && (
          <div className="lg:hidden flex flex-col items-center mt-4">
            <Typography
              as="a"
              href="#"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Mon Compte
            </Typography>
            <Typography
              as="a"
              href="#"
              variant="body"
              className="text-white cursor-pointer"
              onClick={handleLogout}
            >
              Déconnexion
            </Typography>
          </div>
        )}
      </Navbar>

      {/* Contenu de la page */}
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <img className="mx-auto w-20 h-20" src="/logo.png" alt="Logo de l'application" />
        </div>

        {/* Cadres */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/enrollment">
            <Button
              color="white"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              ripple="light"
              className="flex items-center justify-center hover:bg-gray-300 transition duration-300"
            >
              {/* Icône */}
              <img className="w-12 h-12" src="hommes.png" alt="Icône" />

              {/* Texte */}
              <div className="ml-2">
                <Typography as="h3" color="black" className="font-semibold text-lg">
                  Enroller
                </Typography>
                <Typography as="p" color="black">
                  Enregistrer les contribuables
                </Typography>
              </div>
            </Button>
          </Link>

          {/* Cadre Encaisser */}
          <Link to="/encaisser">
            <Button
              color="white"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              ripple="light"
              className="flex items-center justify-center hover:bg-gray-300 transition duration-300"
            >
              {/* Icône */}
              <img className="w-12 h-12" src="Wallet@3x.png" alt="Icône" />

              {/* Texte */}
              <div className="ml-2">
                <Typography as="h3" color="black" className="font-semibold text-lg">
                  Encaisser
                </Typography>
                <Typography as="p" color="black">
                  Encaisser les contribuables
                </Typography>
              </div>
            </Button>
          </Link>

          {/* Cadre Rapports */}
          <Link to="/reports">
            <Button
              color="white"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={false}
              ripple="light"
              className="flex items-center justify-center hover:bg-gray-300 transition duration-300"
            >
              {/* Icône */}
              <img className="w-12 h-12" src="Line_up@3x.png" alt="Icône" />

              {/* Texte */}
              <div className="ml-2">
                <Typography as="h3" color="black" className="font-semibold text-lg">
                  Rapports
                </Typography>
                <Typography as="p" color="black">
                  Consulter les Rapports contribuables
                </Typography>
              </div>
            </Button>
          </Link>

  
            {/* Cadre Contrôler */}
            <Link to="/control">
              <Button
                color="white"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                ripple="light"
                className="flex items-center justify-center hover:bg-gray-300 transition duration-300"
              >
                {/* Icône */}
                <img className="w-12 h-12" src="Done_ring_round_light@3x.png" alt="Icône" />
  
                {/* Texte */}
                <div className="ml-2">
                  <Typography as="h3" color="black" className="font-semibold text-lg">
                    Contrôler
                  </Typography>
                  <Typography as="p" color="black">
                    Contrôler les contribuables
                  </Typography>
                </div>
              </Button>
            </Link>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center mt-auto py-8">
          <CopyrightText />
        </div>
      </div>
    );
  }
  
  export default HomePage;
  