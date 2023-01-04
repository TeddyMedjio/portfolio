import React from "react";
import Image from "next/image";
import avatar from "../public/img/profil2.png";
import crop from "../public/img/crop.svg";
import anchor from "../public/img/anchor.svg";
import behance from "../public/img/behance.svg";
import linkedin from "../public/img/linkedin.svg";

const Aboutheader = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat pb-28">
      <div className="bg-gradient-to-b from-[#F9FAFC] ">
        <div className="flex flex-col items-center justify-center pt-[180px] md:pt-[200px]">
          <p className="text-base tracking-widest text-yellow uppercase text-center">
            Apprenons à nous connaître
          </p>
          <div className="relative flex flex-col items-center justify-center">
            {/* elements animes */}
            <Image
              src={crop}
              className="crop hidden md:block absolute md:top-[350px] lg:top-[280px] w-auto -left-32 md:h-20 lg:h-16 "
              alt="image crop tool"
            />
            <Image
              src={anchor}
              className="anchor absolute hidden md:block w-auto md:top-[150px] md:-right-20 z-[99] md:h-20 lg:h-16 "
              alt="image anchor"
            />
            <div className="text-center">
              <h1 className="title font-anton uppercase text-[80px] md:text-[108px] lg:text-[150px] text-darkBlue cursor-pointer">
                à propos
              </h1>
              <h1 className="hidden md:block absolute uppercase top-[0px] title-line font-anton text-[80px] md:text-[108px] lg:text-[150px] cursor-default z-50">
                à propos
              </h1>
            </div>
            {/* image avatar */}
            <Image
              src={avatar}
              className="absolute top-[50px] md:top-[60px] lg:top-[45px] w-[350px]  h-auto md:w-[280px] lg:w-[350px] z-[0]"
              alt="image avatar"
            />
          </div>

          {/* Buttons */}
          <div className="mt-80 flex flex-row justify-between items-center w-[80%] space-x-10 mx-auto container">
            <a
              href="https://www.behance.net/jeanclmedjio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={behance}
                className="hidden lg:block"
                alt="logo behance"
              />
            </a>

            <a
              href="/img/cv.pdf"
              download
              className=" text-center bg-gradient-to-r from-darkBlue via-darkBlue to-[#43BECA] text-white text-xl transition-all duration-300 ease hover:px-7 hover:shadow-xl px-5 py-3 rounded-[4px] cursor-pointer"
            >
              Telecharger mon CV
            </a>
            <a
              href="https://www.linkedin.com/in/jean-claude-nganmedjio-603995a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedin}
                className="w-7 hidden lg:block"
                alt="logo linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutheader;
