import React from "react";

const Identite = () => {
  return (
    <div>
      <div className="mx-auto conatiner w-[80%] flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center my-20">
        <video
          autoPlay
          loop
          className="hidden lg:block my-5 lg:mt-0 w-[474px] md:w-auto lg:w-[474px] rounded-2xl"
        >
          <source src={"/animation.mp4"} />
        </video>
        <video
          autoPlay
          loop
          className="lg:hidden my-5 lg:mt-0 w-[474px] md:w-auto lg:w-[474px] rounded-2xl"
        >
          <source src={"/animation.webm"} />
        </video>

        <div className="flex-1 lg:pl-20 mb-10 ">
          <p className="text-base tracking-widest text-[#F6BB42] uppercase mb-5">
            Webdesign
          </p>
          <h2 className="text-5xl font-anton text-darkBlue leading-[70px] mb-10">
            Un site performant et facile à administrer
          </h2>
          <p className="text-lg text-[#475769]">
            Aucun template ! En tant Web dev, je crée vos sites sur-mesure pour
            accroître votre expérience de marque et vous faire gagner en
            productivité. Facile d’accès, optimisé pour la SEO et libre de toute
            maintenance après la mise en ligne :{" "}
            <span className="font-bold">
              je vous permettrai d’avoir un site à la hauteur de vos objectifs.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Identite;
