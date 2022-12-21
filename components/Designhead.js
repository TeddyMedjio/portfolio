import React from "react";
import Image from "next/image";
import logos from "../public/img/logos.png";

const Designhead = () => {
  return (
    <div className="bg-hero-color bg-cover bg-no-repeat pb-28 h-screen">
      <div className="w-[80%] mx-auto ">
        <div className="flex flex-col items-center justify-center pt-[230px] md:pt-[200px]">
          <p className="text-base tracking-widest text-[#F6BB42] uppercase text-center">
            expert graphiste
          </p>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="title font-anton uppercase text-[45px] md:text-[70px] lg:text-[90px] text-[#012857] mb-10">
                Direction artistique de qualité pour les créatifs.
              </h1>
            </div>
          </div>

          {/* Buttons */}
          <a
            href="#"
            className=" text-center bg-white border-[#012857] border-[1px] text-[#012857] text-xl transition-all duration-300 ease hover:px-7 hover:shadow-xl px-5 py-3 rounded-[4px] cursor-pointer"
          >
            Démarrons un projet ensemble
          </a>
          {/* animation logos */}
          <div className="w-[380px] md:w-[500px] overflow-x-auto mt-10">
            <div className="slider mix-blend-multiply">
              <div className="slide-track">
                <Image src={logos} className="logo" />
                <Image src={logos} className="logo" />

                {/* <!-- same 9 slides doubled (duplicate) --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designhead;
