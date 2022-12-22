// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import bange from "../public/img/bange_acceuil.jpg";
import newspaper from "../public/img/newspaper_acceuil.jpg";
import balook from "../public/img/balook_acceuil.jpg";
import challenge from "../public/img/challenge_acceuil.jpg";
import petrolex from "../public/img/petrolex_acceuil.jpg";
import intersystem from "../public/img/intersysterm_acceuil.jpg";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwipe"
      >
        <SwiperSlide>
          <a
            href="https://bange-vzjt.vercel.app/#"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            <Image src={bange} className="h-full rounded-2xl" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <a
            href="https://newspaper-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            <Image src={newspaper} className="h-full rounded-2xl" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <a
            href="https://baalook.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            <Image src={balook} className="h-full rounded-2xl" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <a
            href="https://challenge-international.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
          >
            <Image src={challenge} className="h-full rounded-2xl" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={petrolex} className="h-full rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={intersystem} className="h-full rounded-2xl" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
