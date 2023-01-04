import Logo from "../public/img/Logo.svg";
import behance from "../public/img/behance.svg";
import linkedin from "../public/img/linkedin.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Navbar({ children }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="bg-[#F9FAFC] z-[500] ">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="absolute left-0 right-0 pt-10 flex items-center justify-between w-[80%] mx-auto container  ">
        <Link href="/">
          <Image src={Logo} height="auto" alt="logo NJ" />
        </Link>

        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-12 mr-12">
            <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA]">
              <Link
                href="/graphic-design"
                className={
                  router.pathname == "/graphic-design"
                    ? "text-[#43BECA] font-medium"
                    : ""
                }
              >
                Design
              </Link>
            </li>
            <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA]">
              <Link
                href="/website"
                className={
                  router.pathname == "/website"
                    ? "text-[#43BECA] font-medium"
                    : ""
                }
              >
                Website
              </Link>
            </li>
            <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA] ">
              <Link
                href="/about"
                className={
                  router.pathname == "/about"
                    ? "text-[#43BECA] font-medium"
                    : ""
                }
              >
                A propos
              </Link>
            </li>
          </ul>

          <a
            href="mailto:hello@medjio.fr"
            className="bg-gradient-to-r from-darkBlue via-darkBlue to-[#43BECA] text-white transition-all duration-300 ease hover:px-7 hover:shadow-xl px-5 py-3 rounded-[4px]"
          >
            hello@medjio.me
          </a>
        </div>

        {/* mobile menu */}
        <div className=" lg:hidden w-full flex justify-end items-center ">
          <div
            className="group w-7 h-7 cursor-pointer flex-col justify-between items-center flex"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-darkBlue rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-[#43BECA] rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-darkBlue rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </div>
        </div>
      </div>
      {children}
    </nav>
  );
}

// mobile navigation

function MobileNav({ open, setOpen }) {
  const router = useRouter();
  return (
    <div
      className={`z-[500] lg:hidden absolute top-36 left-0 h-screen w-full bg-white transform ${
        open ? "-translate-x-0 " : "-translate-x-full"
      } transition-transform duration-700 ease-in-out`}
    >
      <hr className="border-t-2 border-darkBlue" />
      <div className=" flex flex-col items-center justify-center space-y-32 mt-12 mx-auto">
        <ul className=" flex flex-col justify-center space-y-8 w-[100%] text-center ">
          <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA] text-5xl font-bold">
            <Link href="/graphic-design">
              <span className="text-[#F6BB42]">D</span>esign
            </Link>
          </li>

          <hr className="border-t-2 border-darkBlue " />
          <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA] text-5xl font-bold">
            <Link href="/website">
              <span className="text-[#F6BB42]">W</span>ebsite
            </Link>
          </li>

          <hr className="border-t-2 border-darkBlue" />
          <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA] text-5xl font-bold">
            <Link href="/about">
              <span className="text-[#F6BB42]">A</span> propos
            </Link>
          </li>
          <hr className="border-t-2 border-darkBlue" />
        </ul>
      </div>
      <div className=" text-center mt-28">
        <Link
          href="mailto:hello@medjio.me"
          className="bg-gradient-to-r from-darkBlue via-darkBlue to-[#43BECA] text-white text-xl transition-all duration-300 ease hover:px-7 hover:shadow-xl px-5 py-3 rounded-[4px]"
        >
          Démarrer un projet
        </Link>
        <div className="flex flex-row items-center justify-center mt-14 space-x-5">
          <Link
            href="https://www.behance.net/jeanclmedjio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={behance} className="w-" alt="logo behance" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jean-claude-nganmedjio-603995a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} className="w-7" alt="logo linkedin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
