import React from "react";
import Slideprojet from "./Slideprojet";

const Projects = () => {
  return (
    <div className=" bg-[#012857] h-[926px] my-28">
      <div className="relative z-0 h-[926px]">
        <div className=" gradient-mask absolute inset-0 w-full overflow-x-hidden">
          <div className="centrer h-[500px] w-[1180px] whitespace-nowrap">
            <h2 className="text-5xl text-center font-anton text-white mb-20">
              Derniers projets
            </h2>
            <Slideprojet />
          </div>
        </div>
        <div className="z-0 grid grid-cols-8 grid-rows-12 border border-white/20 pt-16 ">
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20 bg-white/5"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20 bg-white/5"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20 bg-white/5"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20 bg-white/5"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
          <div className="aspect-square border border-white/20"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
