import React from "react";
import Image from "next/image";
import konrad from "../public/img/konrad.png";
import intersystem from "../public/img/intersystem.png";
import nakupenda from "../public/img/nakupenda.png";
import newspaper from "../public/img/newspaper.png";
import bange from "../public/img/bange.png";
import njc from "../public/img/njc.png";

const Webdesign = () => {
  return (
    <div className="hidden lg:block w-screen">
      <div className="w-full min-h-[378px] -mt-80 md:-mt-56 lg:-mt-56 justify-center items-center ">
        <div className="absolute w-[115%] mx-auto flex flex-row items-center justify-center -left-20">
          <Image
            src={njc}
            className="shadow-sn w-[278px]"
            alt="site portfolio"
          />
          <Image
            src={intersystem}
            className="shadow-sn w-[278px] mt-28"
            alt="site intersystem"
          />
          <Image
            src={nakupenda}
            className="shadow-sn w-[278px] mt-52"
            alt="site nakupenda"
          />
          <Image
            src={bange}
            className="shadow-sn w-[278px] mt-52"
            alt="site bange"
          />
          <Image
            src={newspaper}
            className="shadow-sn w-[278px] mt-28"
            alt="site newspaper"
          />
          <Image
            src={konrad}
            className="shadow-sn w-[278px]"
            alt="site konrad"
          />
        </div>
      </div>
    </div>
  );
};

export default Webdesign;
