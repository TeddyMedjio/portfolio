import React from "react";
import DemoCarousel from "./DemoCarousel";

const Temoignage = () => {
  return (
    <div>
      <div className="mt-20 m mx-auto conatiner w-[80%] md:w-[90%] lg:w-[75%] flex flex-col md:flex-row items-center justify-center lg:my-28">
        <div className="flex-1 mb-10 lg:mb-0 ">
          <p className="text-base tracking-widest text-[#F6BB42] uppercase mb-5">
            Ils/elles en parlent le mieux
          </p>
          <h2 className="text-5xl font-anton text-[#012857] leading-[70px] mb-10">
            Votre satisfaction avant tout
          </h2>
          <p className="text-lg text-[#475769]">
            Une relation client saine, c’est vital. Comptez sur moi pour
            résoudre vos problèmes et toujours faire grandir votre entreprise
            dans le respect et la bonne humeur.{" "}
            <span className="font-bold">
              Mes client·e·s apprécient ma pluridisciplinarité, ma réactivité et
              mes capacités d’écoute
            </span>{" "}
            afin de restituer au mieux leur demande.
          </p>
        </div>
        <div className="w-auto md:w-[500px] overflow-x-hidden">
          <DemoCarousel />
        </div>
      </div>
    </div>
  );
};

export default Temoignage;
