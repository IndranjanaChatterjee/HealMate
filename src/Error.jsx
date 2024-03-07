import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center m-0 p-0 outline-none box-border font-sans h-screen bg-gradient-to-br from-sap2 to-dark bg-fixed bg-cover bg-repeat">
      <div className=" h-3/4 w-3/4 flex items-center justify-center bg-dark shadow-4xl rounded-xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-5 text-9xl leading-none relative">
            <span className="text-sap2 bg-clip-text text-transparent">404</span>
          </h2>
          <h4 className="text-2xl mb-6 uppercase relative">
            <span className="text-sap bg-clip-text text-transparent">
              Opps! Page not found
            </span>
          </h4>
          <p className="max-w-2xl mx-auto text-center text-lg text-sap">
            Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
          </p>
          <div className="max-w-2xl mx-auto text-center mt-6 flex-row inline-block py-2 px-6 border-2 border-sap2 text-light font-semibold rounded-full uppercase transition duration-300 ease-in-out hover:bg-sap2 hover:text-dark">
            <NavLink to='/'>Return to Home Page.</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
