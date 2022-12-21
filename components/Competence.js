import React from "react";
import Image from "next/image";
import xd from "../public/img/adobe-xd.png";
import figma from "../public/img/figma.png";
import html from "../public/img/html.png";
import react from "../public/img/react.png";
import nextjs from "../public/img/Nextjs.png";
import graphisme from "../public/img/graphisme.png";

const Competence = () => {
  return (
    <div>
      <div className="container mx-auto w-[80%] my-40">
        <div className="flex justify-center lg:justify-between items-center flex-wrap ">
          <h2 className="text-5xl font-anton text-[#012857] leading-[70px]">
            Ce que je peux faire pour vous
          </h2>
          <a
            href="mailto:hello@medjio.fr"
            className="hidden lg:block bg-gradient-to-r from-[#012857] via-[#012857] to-[#43BECA] text-white text-xl transition-all duration-300 ease hover:px-7 px-5 py-3 rounded-[4px]"
          >
            Démarrer un projet
          </a>
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row justify-center items-center md:items-stretch my-20 flex-wrap md:w-[60%] lg:w-full mx-auto ">
          <div className="flex-1 py-10 px-6 bg-white border-[1px] border-[#012857] rounded-lg hover:shadow-xl cursor-pointer transition duration-500 ease-in-out ">
            <div className="flex items-center mb-10">
              <Image src={xd} className="mr-5" alt="logo adobe xd" />
              <Image src={figma} alt="logo figma" />
            </div>
            <h3 className="text-4xl font-anton text-[#012857] mb-5 leading-[50px]">
              Concevoir le design de votre produit
            </h3>
            <p className="text-[#475769] text-lg leading-8">
              De la stratégie digitale au design produit, je vous aide à
              atteindre vos objectifs et résoudre des problématiques complexes
              grâce au design.
            </p>
          </div>

          <div className="flex-1 py-10 px-6 bg-white border-[1px] border-[#012857] rounded-lg hover:shadow-xl cursor-pointer transition-all duration-500 ease-in-out">
            <div className="flex items-center mb-10">
              <Image src={html} className="mr-5" alt="logo html" />
              <Image src={react} className="mr-5" alt="logo react" />
              <Image src={nextjs} alt="logo nextjs" />
            </div>
            <h3 className="text-4xl font-anton text-[#012857] mb-5 leading-[50px]">
              Construire un site sur-mesure et responsive
            </h3>
            <p className="text-[#475769] text-lg leading-8">
              Faites confiance en mes compétences sur les languages HTML, CSS,
              Javascript et les frameworks React js et Next JS afin de vous
              réaliser un site unique, performant et livré rapidement.
            </p>
          </div>

          <div className=" flex-1 py-10 px-6 bg-white border-[1px] border-[#012857] rounded-lg hover:shadow-xl cursor-pointer transition-all duration-500 ease-in-out ">
            <div className="flex items-center space-x-5 mb-10">
              <Image src={graphisme} alt="logo adobe" />
            </div>
            <h3 className="text-4xl font-anton text-[#012857] mb-5 leading-[50px]">
              Réaliser votre prochaine affiche
            </h3>
            <p className="text-[#475769] text-lg leading-8">
              Votre événement mérite d'être vu ! Un shooting photo - en studio
              ou en extérieur - et un grand coup de Photoshop me permettront de
              réaliser l'affiche dont vous rêvez pour convaincre votre public.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competence;
