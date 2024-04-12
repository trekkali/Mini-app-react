import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleSubtitle from '../Components/TitleSubtitle';
import CopyrightText from '../Components/CopyrightText';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { Input, Navbar, Typography } from '@material-tailwind/react';
import { BsList } from 'react-icons/bs';
import { Select, Option } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

function Enrollment() {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [formData, setFormData] = useState({
    nomPrenom: "",
    raisonSociale: "",
    zone: "",
    secteur: "",
    telephone1: "",
    telephone2: "",
    montant: "",
    categorie: ""
  });

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

  const genererNumeroRecu = () => {
    // Génération d'un numéro de reçu unique (par exemple, un timestamp)
    const timestamp = Date.now();
    return `RECU-${timestamp}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithRecu = {
        ...formData,
        numeroRecu: genererNumeroRecu()
      };
      const docRef = await addDoc(collection(db, "commerçants"), formDataWithRecu);
      console.log("Document written with ID: ", docRef.id);
      setOpen(true); // Afficher la boîte de dialogue de confirmation
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
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
              href="/encaisser"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Encaisser
            </Typography>
            <Typography
              as="a"
              href="/encaisser"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Controler
            </Typography>
            <Typography
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
              href="/encaisser"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Encaisser
            </Typography>
            <Typography
              as="a"
              href="/encaisser"
              variant="body"
              className="text-white mx-4 cursor-pointer"
            >
              Controler
            </Typography>
            <Typography
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
        <TitleSubtitle title="Enroller" subtitle="les contribuables" className="title" />
      </div>

      <form className="enrollment-form flex flex-col space-y-4 px-4 md:px-0 md:max-w-lg mx-auto" onSubmit={handleSubmit}>
        <Input
          label="Nom et prénom"
          color="gray"
          name="nomPrenom"
          value={formData.nomPrenom}
          onChange={handleChange}
        />
        <Input
          label="Raison sociale"
          color="gray"
          name="raisonSociale"
          value={formData.raisonSociale}
          onChange={handleChange}
        />

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-72 md:w-1/2">
            <Select
              label="Zone"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              name="zone"
              value={formData.zone}
              onChange={(value) => {
                setFormData((prevFormData) => ({ ...prevFormData, zone: value }));
                console.log("Zone sélectionnée:", value);
              }}
            >
              <Option value="Zone 1">Zone 1</Option>
              <Option value="Zone 2">Zone 2</Option>
            </Select>

          </div>
          <div className="md:w-1/2">
            <Select
              label="Secteur"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              name="secteur"
              value={formData.secteur}
              onChange={(value) => {
                setFormData((prevFormData) => ({ ...prevFormData, secteur: value }));
                console.log("Secteur sélectionné:", value);
              }}
            >
              <Option value="secteur 1">Secteur 1</Option>
              <Option value="secteur 1">Secteur 2</Option>
            </Select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Input
            label="Téléphone 1"
            color="gray"
            name="telephone1"
            value={formData.telephone1}
            onChange={handleChange}
          />
          <Input
            label="Téléphone 2"
            color="gray"
            name="telephone2"
            value={formData.telephone2}
            onChange={handleChange}
          />
        </div>

        <Input
          label="Montant"
          color="gray"
          name="montant"
          value={formData.montant}
          onChange={handleChange}
        />

        <Select
          label="Catégorie"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
          name="categorie"
          value={formData.categorie}
          onChange={(value) => {
            setFormData((prevFormData) => ({ ...prevFormData, categorie: value }));
            console.log("Catégorie sélectionnée:", value);
          }}
        >
          <Option value="catégorie 1">Catégorie 1</Option>
          <Option value="scatégorie 2" >Catégorie 2</Option>
        </Select>

        <div className="flex justify-center">
          <Button type="submit">Enregistrer</Button>
        </div>
      </form>

      <Dialog open={open} size="sm" handler={() => setOpen(false)}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography as="h3" variant="h6">
              Encaissement réussi
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={() => setOpen(false)}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <DialogBody className="text-center">
          <h2 className="text-4xl font-bold mb-4">Encaissement réussi</h2>
          <p className="text-2xl">
            {formData.nomPrenom && <span>{formData.nomPrenom}</span>} a payé
          </p>
          <h1 className="text-4xl font-bold">
            {formData.montant && `${formData.montant} FCFA`}
          </h1>
          <p className="text-2xl">et a reçu le N°</p>
          <h1 className="text-2xl font-bold">{genererNumeroRecu()}</h1>
        </DialogBody>
      </Dialog>

      <div className="mt-auto text-center">
        <CopyrightText />
      </div>
    </div>
  );
}

export default Enrollment;
