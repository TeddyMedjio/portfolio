import React from "react";
import Image from "next/image";
import profil from "../public/img/profil.png";
import webdesign from "../public/img/webdesign.svg";
import pentool from "../public/img/pen-tool.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat h-screen">
      <div className="bg-gradient-to-b from-[#F9FAFC] ">
        <div className="flex flex-col items-center justify-center pt-[180px] md:pt-[200px]">
          <p className="text-xl text-[#012857] text-center">
            👋🏽, Je {"m'appelle "}
            <span className="text-[#F6BB42]">N. Jean claude</span> , je suis
          </p>
          <div className="relative flex flex-col items-center justify-center">
            {/* elements animes */}
            <Image
              src={webdesign}
              className="webdesign hidden md:block absolute lg:top-[200px] w-auto left-0 md:h-20 lg:h-24 "
              alt="image webdesign"
            />
            <Image
              src={pentool}
              className="pen-tool absolute hidden md:block w-auto md:top-[130px] right-10 md:right-20 z-[99] md:h-20 lg:h-32 "
              alt="image pen-tool"
            />
            <div className="text-center">
              <h1 className="title font-anton text-[60px] md:text-[108px] lg:text-[165px] text-[#012857] cursor-pointer">
                Webdesigner
              </h1>
              <h1 className="hidden md:block absolute top-[0px] title-line font-anton text-[60px] md:text-[108px] lg:text-[165px] cursor-default z-50">
                Webdesigner
              </h1>
            </div>
            {/* image avatar */}
            <Image
              src={profil}
              className="absolute top-[130px] md:top-[60px] lg:top-[45px] w-[200px] h-auto md:w-[280px] lg:w-[350px] z-[0]"
              alt="image avatar"
            />
            <div className=" bloc -mt-12 ">
              <h1 className=" title-two text-[60px] font-anton md:text-[108px] lg:text-[158px] cursor-default mt-10 md:mt-0">
                & front-end dev
              </h1>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 mt-52 md:mt-40 lg:mt-14">
            <Link
              href="/Graphic-design"
              className={`router.pathname == "/Graphic-design" ? "font-bold" : "" p-4 bg-[#012857] border-[1px] border-[#012857] text-white rounded-[4px] text-sm hover:scale-105 transition-all duration-300 ease hover:shadow-xl `}
            >
              Vous avez besoin {"d'un"} designer
            </Link>
            <Link
              href="/Website"
              className={`router.pathname == "/Website" ? "font-bold" : "" bg-white p-4 border-[#012857] border-[1px] rounded-[4px] text-sm hover:scale-105 transition-all duration-300 ease hover:shadow-xl`}
              $
            >
              Vous avez besoin {"d'un"} front-end dev
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
