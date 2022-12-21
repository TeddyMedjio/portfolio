import React from "react";
import Image from "next/image";
import office from "../public/img/office.gif";

const Aboutsite = () => {
  return (
    <div className="mt-28">
      <div className="w-[80%] md:w-[65%] lg:w-[35%] mx-auto">
        <h2 className="text-5xl font-anton text-[#012857] leading-[70px] mb-10">
          Je fais des sites et des designs, et je le fais bien.
        </h2>
        <p className="text-lg text-justify text-[#475769]">
          Passionné par la musique, le football et le graphisme, j’aime
          collaborer avec des personnes qui attachent une importance à
          l’esthétisme, qui comprennent le pouvoir de la simplicité et qui
          savent qu’une bonne expérience client est primoridiale. <br />
          <br /> En gardant votre identité au coeur de ma démarche, mon but est
          de faire en sorte de trouver la solution la plus simple pour répondre
          à vos besoins. <br /> <br /> Mes client·e·s font appel à mes services
          pour mon efficacité, ma polyvalence et mon aisance dans nos échanges
          (et aussi parce que je fais des cookies incroyables, le secret c’est
          de mettre beaucoup de beurre demi-sel).
        </p>
      </div>
      {/* animation */}
      <div className="mt-40 transform rotate-3">
        <div className="marquee text-center ">
          <div className="track">
            <h1 className="text-[#012857] font-anton text-[90px]">
              &nbsp;Webdesign - Graphisme - Stratégie de communication -
              Webdesign - Graphisme - Stratégie de communication - Webdesign -
              Graphisme - Stratégie de communication
            </h1>
          </div>
        </div>

        <div className="marquee-two text-center">
          <div className="track-two">
            <h1 className="text-[#012857] text-line font-anton text-[90px]">
              &nbsp;Show me what you got! - Show me what you got! - Show me what
              you got! - Show me what you got! - Show me what you got! - Show me
              what you got!
            </h1>
          </div>
        </div>
      </div>

      {/* third party */}
      <div className="w-[80%] md:w-[65%] lg:w-[35%] mx-auto my-40 space-y-10">
        <p className="text-lg tracking-widest text-[#F6BB42] uppercase ">
          ce que j'aime
        </p>
        <h2 className="text-5xl font-anton text-[#012857] leading-[70px] mb-10">
          3 choses à mon sujet
        </h2>
        <p className="text-lg text-[#475769] text-justify">
          <span className="text-[#012857] font-bold">1-</span> La majorité de
          mon temps libre est consacrée à{" "}
          <span className="font-bold">la musique et à la cuisine</span>, une
          activité passionnante qui me permet de développer ma créativité.
        </p>
        <p className="text-lg text-[#475769] text-justify">
          <span className="text-[#012857] font-bold">2-</span> Je considère
          cette scène de <span className="font-bold">The Office</span> comme
          étant la vidéo la plus drôle au monde😂😂.
        </p>
        <p className="text-lg text-[#475769] text-justify">
          <span className="text-[#012857] font-bold">3-</span> J'aime le chiffre
          3 je pense sa à un rapport avec le fait que je sois née le 3e mois.
        </p>

        <Image src={office} className="w-full rounded-lg" alt="animation" />
      </div>
    </div>
  );
};

export default Aboutsite;
