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
      <div className=" mx-auto conatiner lg:w-[80%] flex flex-col-reverse lg:flex-row items-center justify-center lg:my-28 sm:mb-14 ">
        <div className="relative w-screen max-w-full h-[364px] lg:h-auto overflow-x-auto">
          <div className="absolute whitespace-nowrap snap-x lg:relative lg:flex-1 flex items-center justify-center ">
            <div className="hidden lg:flex flex-col items-center lg:mr-5">
              <Image
                src={dj}
                className=" h-[334px] lg:h-[auto] lg:hover:scale-95 transition-all duration-500 lg:mb-5 "
                alt="flyers"
              />

              <Image
                src={koba}
                className="h-[334px] lg:h-[auto] lg:hover:scale-95 transition-all duration-500"
                alt="flyers"
              />
            </div>
            <div className="lg:ml-0 flex lg:flex-col">
              <Image
                src={dj}
                className="lg:hidden h-[334px] lg:h-[auto] lg:hover:scale-95 transition-all duration-500 lg:mb-5 "
                alt="flyers"
              />

              <Image
                src={koba}
                className="lg:hidden h-[334px] lg:h-[auto] lg:hover:scale-95 transition-all duration-500"
                alt="flyers"
              />
              <Image
                src={dadju}
                className="h-[334px] lg:h-[auto] lg:hover:scale-95 transition-all duration-500 lg:mb-5"
                alt="flyers"
              />

              <Image
                src={gwen}
                className="h-[334px] lg:h-[auto] lg:hover:scale-95 transition-all duration-500 lg:mb-5"
                alt="flyers"
              />

              <Image
                src={magasine}
                className="h-[334px] lg:h-[auto] lg:hover:scale-95 transition-all duration-500"
                alt="flyers kizz daniel"
              />
            </div>
          </div>
        </div>
        <div className="w-10/12 lg:w-full  my-28 lg:ml-16 space-y-10 ">
          <p className="text-base tracking-widest text-[#F6BB42] uppercase ">
            Communication visuelle
          </p>
          <h2 className="text-5xl font-anton text-darkBlue leading-[70px]">
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
