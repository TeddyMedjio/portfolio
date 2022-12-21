import React from "react";
import Image from "next/image";
import dj from "../public/img/dj.png";
import koba from "../public/img/koba.png";
import dadju from "../public/img/dadju.png";
import gwen from "../public/img/gwen.png";
import magasine from "../public/img/magasine.png";

const Communication = () => {
  return (
    <div className="bg-[#F9FAFC] border-y-[#E9EAEF] border-2 mt-36">
      <div className="mx-auto conatiner w-[80%] flex flex-col lg:flex-row items-center justify-center my-28 ">
        <div className="flex-2 flex flex-col lg:flex-row items-center justify-center">
          <div>
            <a href="#">
              <Image
                src={dj}
                className="hover:scale-95 transition-all duration-500 "
                alt="flyers"
              />
            </a>
            <a href="#">
              <Image
                src={koba}
                className="hover:scale-95 transition-all duration-500"
                alt="flyers"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <Image
                src={dadju}
                className="hover:scale-95 transition-all duration-500"
                alt="flyers"
              />
            </a>
            <a href="#">
              <Image
                src={gwen}
                className="hover:scale-95 transition-all duration-500"
                alt="flyers"
              />
            </a>
            <a href="#">
              <Image
                src={magasine}
                className="hover:scale-95 transition-all duration-500"
                alt="flyers kizz daniel"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 lg:pr-20 mb-10 lg:mb-0 mt-20 text-center lg:text-left lg:mt-0 lg:ml-20 ">
          <p className="text-base tracking-widest text-[#F6BB42] uppercase mb-5">
            Communication visuelle
          </p>
          <h2 className="text-5xl font-anton text-[#012857] leading-[70px] mb-10">
            Tourné vers l'événementiel
          </h2>
          <p className="text-lg text-[#475769]">
            Votre projet de création nécessite de la communication
            événementielle ? Avec plus de 8 ans d'expérience dans ce domaine, je
            conçois des identités graphiques mémorables pour vos événements. Du
            logo à l'affiche en passant par les cartons d'invitation :{" "}
            <span className="font-bold">
              concentrez-vous sur l'organisation, je m'occupe de votre
              communication.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Communication;
