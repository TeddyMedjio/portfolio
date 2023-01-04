import React from "react";

const Playlist = () => {
  return (
    <div className="bg-hero-musique bg-cover bg-no-repeat bg-center py-[127px]">
      {" "}
      <div className="space-y-10 flex flex-col justify-center items-center container mx-auto w-[80%] md:w-[60%] text-center">
        <p className="text-base tracking-widest text-yellow uppercase ">
          playlist
        </p>
        <h2 className="text-5xl font-anton text-white">
          Du travail en musique !
        </h2>
        <p className="text-lg text-white">
          Je travaille toujours en musique et adore dénicher des artistes qui
          mériteraient plus de reconnaissance. Découvrez mes 100 morceaux
          préférés dans une playlist conçue pour vous.
        </p>
        <a
          href="https://open.spotify.com/artist/19KZTKvRPAa6JH3yzLH86c"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg py-4 px-6 hover:px-8 transition-all duration-300 ease text-white border-white border-[1px] rounded-lg"
        >
          Ecouter ma playlist
        </a>
      </div>
    </div>
  );
};

export default Playlist;
