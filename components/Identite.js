import React from "react";
import Image from "next/image";
import entreprise from "../public/img/entreprise.png";

const Identite = () => {
  return (
    <div>
      <div className="mx-auto container w-10/12 flex flex-col lg:flex-row items-center justify-center mt-28">
        <div className="flex-1 lg:pr-20 mb-10 ">
          <p className="text-base tracking-widest text-yellow uppercase mb-5">
            branding
          </p>
          <h2 className="text-5xl font-anton text-darkBlue leading-[70px] mb-10">
            Votre identité graphique au coeur de ma démarche
          </h2>
          <p className="text-lg text-bluegray">
            Une gestion à 360° de votre projet ! Conception d’identité
            graphique, édition d’un brand book, création de maquettes et
            développement du site :{" "}
            <span className="font-bold">
              j’assure la continuité de votre identité et vous accompagne sur
              chaque étape clé de votre projet.
            </span>
          </p>
        </div>
        <Image
          src={entreprise}
          className="flex-1 w-[500px]"
          alt="logos entreprises"
        />
      </div>
    </div>
  );
};

export default Identite;
