import React from "react";

const Rendez = () => {
  return (
    <div className="bg-hero-rendez bg-cover bg-no-repeat bg-center py-[200px]">
      {" "}
      <div className="space-y-10 flex flex-col justify-center items-center container mx-auto w-[80%] lg:w-[50%] text-center">
        <h2 className="text-5xl font-anton text-white">
          Prenons rendez vous !
        </h2>
        <p className="text-lg text-white">
          Réservez un créneau gratuit de 15 min où nous échangerons sur votre
          projet, vos problématiques et comment les résoudre.
        </p>
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5">
          <a
            href="https://calendly.com/njeanclaude/30min?month=2022-12"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-6 hover:px-8 transition-all duration-300 ease bg-white text-[#012857] border-white border-2 rounded-lg"
          >
            Réservez une consultation gratuite
          </a>
          <a
            href="https://open.spotify.com/artist/19KZTKvRPAa6JH3yzLH86c"
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-6 hover:px-8 transition-all duration-300 ease text-white border-white border-2 rounded-lg"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rendez;
