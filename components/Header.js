import Image from "next/image";
import Link from "next/link";
import Profil from "../public/img/profil.png";
import Webdesign from "../public/img/webdesign.svg";
import Pentool from "../public/img/pen-tool.svg";

const Header = () => (
  <div className="h-screen bg-no-repeat bg-cover bg-hero-pattern">
    <div className="bg-gradient-to-b from-brand-white">
      <div className="flex flex-col items-center justify-center pt-[180px] md:pt-[15%]">
        <p className="text-xl text-center text-brand-dark-blue">
          👋🏽, Je m'appelle {' '}
          <span className="text-brand-yellow">N. Jean claude</span> , je suis
        </p>
        <div className="relative flex flex-col items-center justify-center">
          {/* elements animes */}
          <Image
            src={Webdesign}
            className="webdesign hidden md:block absolute lg:top-[200px] w-auto left-0 md:h-20 lg:h-24 "
            alt="image webdesign"
          />
          <Image
            src={Pentool}
            className="pen-tool absolute hidden md:block w-auto md:top-[130px] right-10 md:right-20 z-100 md:h-20 lg:h-32 "
            alt="image pen-tool"
          />
          <div className="text-center">
            <h1 className="title font-anton text-[60px] md:text-[108px] lg:text-[165px] text-darkBlue cursor-pointer">
              Webdesigner
            </h1>
            <h1 className="hidden md:block absolute top-[0px] title-line font-anton text-[60px] md:text-[108px] lg:text-[165px] cursor-default z-50">
              Webdesigner
            </h1>
          </div>
          {/* image avatar */}
          <Image
            src={Profil}
            className="absolute top-[130px] md:top-[60px] lg:top-[45px] w-[200px] h-auto md:w-[280px] lg:w-[350px] z-0"
            alt="image avatar"
          />
          <div className="-mt-12 bloc">
            <h1 className=" title-two text-[60px] font-anton md:text-[108px] lg:text-[158px] cursor-default mt-10 md:mt-0">
              & front-end dev
            </h1>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-10 mt-52 md:mt-40 lg:mt-14">
          <Link
            href="/design"
            className="p-4 text-sm transition-all duration-300 border bg-brand-dark-blue border-brand-dark-blue text-brand-white rounded-ssm hover:scale-105 ease hover:shadow-xl"
          >
            Vous avez besoin d'un designer
          </Link>
          <Link
            href="/web-site"
            className="p-4 text-sm transition-all duration-300 border bg-brand-white border-brand-dark-blue rounded-ssm hover:scale-105 ease hover:shadow-xl"
          >
            Vous avez besoin d'un front-end dev
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
