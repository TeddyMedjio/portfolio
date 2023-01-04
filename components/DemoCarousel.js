// Import Swiper React components
import "swiper/css/autoplay";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import junior from "../public/img/junior.jpg";
import camille from "../public/img/camille.jpg";
import joel from "../public/img/joel.jpg";
import mbg from "../public/img/mbg.jpg";
import clement from "../public/img/clement.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="absolute pt-28 p-5 bottom-0 bg-gradient-to-t from-gray-900">
            <p className="text-sm font-normal">
              M. Jean Claude brille par sa capacité à comprendre immédiatement
              le brief et à le remettre aussitôt en perspective de façon
              pertinente.
            </p>
            <p className="text-sm font-normal mt-5">
              <span className="font-bold">M. Clément Tchouante</span> - PDG
              Challenge International Magazine
            </p>
          </div>
          <Image src={clement} alt="photo" />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="absolute h-38 pt-28 p-5 bottom-0 bg-gradient-to-t from-gray-800">
            <p className="text-sm font-normal">
              La créativité de Jean Claude n’a pas de limites : malgré nos
              contraintes et exigences, il réussit toujours à s’adapter pour
              dépasser nos attentes!
            </p>
            <p className="text-sm font-normal mt-5">
              <span className="font-bold">M. Camille</span> - PDG Manufacture
              ORACLE Sarl
            </p>
          </div>
          <Image src={camille} alt="photo" />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="absolute h-38 pt-28 p-5 bottom-0 bg-gradient-to-t from-gray-800">
            <p className="text-sm font-normal">
              Travail excellent, créatif et réactif. Impossible d'imaginer
              développer mes projets de création sans lui.
            </p>
            <p className="text-sm font-normal mt-5">
              <span className="font-bold">Joel Temgoua</span> - PDG Learnlife
              Entertainment
            </p>
          </div>
          <Image src={joel} alt="photo" />
        </SwiperSlide>

        <SwiperSlide>
          <div className="absolute h-38 pt-28 p-5 bottom-0 bg-gradient-to-t from-gray-800">
            <p className="text-sm font-normal">
              Extensive aesthetics, crazy kindness and crazy production speed: I
              highly recommend N. Jean Claude!
            </p>
            <p className="text-sm font-normal mt-5">
              <span className="font-bold">Fabian Junior</span> - PDG Scarface
              entertainment
            </p>
          </div>
          <Image src={junior} alt="photo" />
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="absolute h-38 pt-28 p-5 bottom-0 bg-gradient-to-t from-gray-800">
            <p className="text-sm font-normal">
              JC a su nous accompagner dans la réflexion et l'idéation en amont
              et ces propositions/réalisations sont toujours pertinentes et
              argumentées.
            </p>
            <p className="text-sm font-normal mt-5">
              <span className="font-bold">M. Batchami</span> - Responsable
              Marketing PETROLEX
            </p>
          </div>
          <Image src={mbg} alt="photo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
