import React from 'react';
import PasswordReset from '../Components/PasswordReset.jsx';
import { Card } from "@material-tailwind/react";
import { CardBody } from 'react-bootstrap';

function PasswordResetPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Réinitialisation du mot de passe</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="mt-4 pt-5 pr-5 pl-5 pb-5 w-full">
          <CardBody>
          <div>
          <PasswordReset />
          </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default PasswordResetPage;
