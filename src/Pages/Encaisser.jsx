import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import TitleSubtitle from '../Components/TitleSubtitle.jsx';
import CopyrightText from '../Components/CopyrightText';
import { Typography, Button , Input} from '@material-tailwind/react';
import { BsList } from 'react-icons/bs'; // Importation de l'icône de menu
import {
  Navbar,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";


function Enrollment() {

  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();


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
    <div className="enrollment-page flex flex-col h-screen">
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
              href="/enrollment"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Enroller
            </Typography>
            <Typography
              as="a"
              href="/encaisser"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Controler
            </Typography><Typography
              as="a"
              href="#"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Rapports
            </Typography>
            <Typography
              as="a"
              href="#"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Compte
            </Typography>
            <Typography
              as="a"
              href="#"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Décaisser
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
              href="/enrollment"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Enroller
            </Typography>
            <Typography
              as="a"
              href="/encaisser"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Controler
            </Typography><Typography
              as="a"
              href="#"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Rapports
            </Typography>
            <Typography
              as="a"
              href="#"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Compte
            </Typography>
            <Typography
              as="a"
              href="#"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Décaisser
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

      <div className="text-center mb-4">
        <img src="/logo.png" alt="Logo de Goblo" className="h-16 mx-auto" />
      </div>

      <div className="text-center mb-4">
        <TitleSubtitle title="Encaisser" subtitle="les contribuables" className="title" />
      </div>

      <form className="enc-form flex flex-col space-y-4 px-4 md:px-0 md:max-w-lg mx-auto">
      <div className="flex justify-center mb-4">
      <Input className = 'w-72' label="Matricule" 
              color="gray"
      />
      </div>

      <Button className='w-72' onClick={handleOpen} > Encaisser</Button>
             
              
            
             <Dialog 
               open={open} 
                 size="xs" 
                 handler={handleOpen}>
 
                 <div className="flex items-center justify-between">
                   <DialogHeader className="flex flex-col items-start">
                   </DialogHeader>
                   
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     className="mr-3 h-5 w-5"
                     onClick={handleOpen}
                   >
                     <path
                       fillRule="evenodd"
                       d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                       clipRule="evenodd"
                     />
                   </svg>
                 </div>
 
                 <DialogBody className='text-center'>
                     <h2 className="text-4xl font-bold mb-4">Encaissement réussi</h2>
                     <p className='text-2xl'> <span> M. TETCHI </span> a payé</p>
                     <h1 className='text-4xl font-bold'>10.000 FCFA</h1>
                     <p className='text-2xl'>et a reçu le N°</p>
                     <h1 className='text-2xl font-bold'>2 5 4 8 6 25 </h1>
                 </DialogBody>
 
             </Dialog>
      </form>
      

      <div className="mt-auto text-center">
        <CopyrightText />
      </div>
    </div>
  );
}

export default Enrollment;
