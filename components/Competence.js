import React from "react";
import Image from "next/image";
import xd from "../public/img/adobe-xd.svg";
import figma from "../public/img/figma.svg";
import html from "../public/img/html.svg";
import css from "../public/img/css.svg";
import javascript from "../public/img/javascript.svg";
import react from "../public/img/react.svg";
import nextjs from "../public/img/nextjs.svg";
import photoshop from "../public/img/photoshop.svg";
import illustrator from "../public/img/illustrator.svg";
import indesign from "../public/img/indesign.svg";
import lightroom from "../public/img/lightroom.svg";

const Competence = () => {
  return (
    <div>
      <div className="container mx-auto w-[80%] my-40">
        <div className="flex justify-center lg:justify-between items-center flex-wrap ">
          <h2 className="text-5xl font-anton text-darkBlue leading-[70px]">
            Ce que je peux faire pour vous
          </h2>
          <a
            href="mailto:hello@medjio.me"
            className="hidden lg:block bg-gradient-to-r from-darkBlue via-darkBlue to-[#43BECA] text-white text-xl transition-all duration-300 ease hover:px-7 px-5 py-3 rounded-[4px]"
          >
            Démarrer un projet
          </a>
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row justify-center items-center md:items-stretch my-20 flex-wrap md:w-[60%] lg:w-full mx-auto ">
          <div className="flex-1 py-10 px-6 bg-white border-[1px] border-darkBlue rounded-lg hover:shadow-xl cursor-pointer transition duration-500 ease-in-out ">
            <div className="flex mb-10">
              <Image src={xd} className="mr-5 w-10 h-10" alt="logo adobe xd" />
              <Image src={figma} className="w-10 h-10" alt="logo figma" />
            </div>
            <h3 className="text-4xl font-anton text-darkBlue mb-5">
              Conception du design de votre produit
            </h3>
            <p className="text-[#475769] text-lg leading-8">
              De la stratégie digitale au design produit, je vous aide à
              atteindre vos objectifs et résoudre des problématiques complexes
              grâce au design.
            </p>
          </div>

          <div className="flex-1 py-5 px-6 bg-white border-[1px] border-darkBlue rounded-lg hover:shadow-xl cursor-pointer transition-all duration-500 ease-in-out">
            <div className="flex items-center mb-5">
              <Image src={html} className=" w-12 h-12" alt="logo html" />
              <Image src={css} className="w-12 h-12" alt="logo css" />
              <Image
                src={javascript}
                className="w-10 h-10 mr-2"
                alt="logo javascript"
              />
              <Image src={react} className="w-12 h-12 mr-2" alt="logo react" />
              <Image src={nextjs} className="w-20" alt="logo nextjs" />
            </div>
            <h3 className="text-4xl font-anton text-darkBlue mb-5 ">
              Un site sur-mesure et responsive
            </h3>
            <p className="text-[#475769] text-lg leading-8">
              Faites confiance en mes compétences sur les languages HTML, CSS,
              Javascript et les frameworks React js et Next JS afin de vous
              réaliser un site unique, performant et livré rapidement.
            </p>
          </div>

          <div className=" flex-1 py-10 px-6 bg-white border-[1px] border-darkBlue rounded-lg hover:shadow-xl cursor-pointer transition-all duration-500 ease-in-out ">
            <div className="flex items-center space-x-2 mb-10">
              <Image
                src={photoshop}
                className="w-[40px] h-[40px]"
                alt="logo photoshop"
              />
              <Image
                src={illustrator}
                className="w-10 h-10"
                alt="logo illustrator"
              />
              <Image src={indesign} className="w-10 h-10" alt="logo indesign" />
              <Image
                src={lightroom}
                className="w-10 h-10"
                alt="logo lightroom"
              />
            </div>
            <h3 className="text-4xl font-anton text-darkBlue mb-5 ">
              Réalisation de votre prochaine affiche
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
