import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import behance from "../public/img/behance.svg";
import linkedin from "../public/img/linkedin.svg";

function MobileNav({ open, setOpen }) {
  const router = useRouter();
  return (
    <div
      className={`lg:hidden absolute z-[100] top-40 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0 " : " translate-x-full"
      } transition-transform duration-700 ease-in-out `}
    >
      <div className="">
        <hr className="border-t-2 border-[#012857]" />
        <div className=" flex flex-col items-center justify-center space-y-32 mt-12 mx-auto">
          <ul className=" flex flex-col justify-center space-y-8 w-[100%] text-center ">
            <li className="text-[#012857] transition-all duration-300 ease hover:text-[#43BECA] text-5xl font-bold">
              <Link
                href="/Design"
                className={router.pathname == "/Design" ? "font-bold" : ""}
              >
                <span className="text-[#F6BB42]">D</span>esign
              </Link>
            </li>
            <hr className="border-t-2 border-[#012857] " />
            <li className="text-[#012857] transition-all duration-300 ease hover:text-[#43BECA] text-5xl font-bold">
              <Link
                href="/Website"
                className={router.pathname == "/Website" ? "font-bold" : ""}
              >
                <span className="text-[#F6BB42]">W</span>ebsite
              </Link>
            </li>
            <hr className="border-t-2 border-[#012857]" />
            <li className="text-[#012857] transition-all duration-300 ease hover:text-[#43BECA] text-5xl font-bold">
              <Link
                href="/Apropos"
                className={router.pathname == "/Apropos" ? "font-bold" : ""}
              >
                <span className="text-[#F6BB42]">A</span> propos
              </Link>
            </li>
            <hr className="border-t-2 border-[#012857]" />
          </ul>
        </div>
        <div className=" text-center mt-28">
          <a
            href="mailto:hello@medjio.fr"
            className="bg-gradient-to-r from-[#012857] via-[#012857] to-[#43BECA] text-white text-xl transition-all duration-300 ease hover:px-7 hover:shadow-xl px-5 py-3 rounded-[4px]"
          >
            Démarrer un projet
          </a>
          <div className="flex flex-row items-center justify-center mt-14 space-x-5">
            <a
              href="https://www.behance.net/jeanclmedjio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={behance} className="w-" alt="logo behance" />
            </a>
            <a
              href="https://www.linkedin.com/in/jean-claude-nganmedjio-603995a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} className="w-7" alt="logo behance" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className=" lg:hidden w-full flex justify-end items-center">
        <div
          className="group z-[1000] w-7 h-7 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#012857] rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[#43BECA] rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#012857] rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
