import Logo from "../public/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SideNavbar from "./SideNavbar";

const Navbar = ({ children }) => {
  let [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="z-500 bg-[#F9FAFC]">
      <div className=" left-0 right-0 pt-10 flex items-center justify-between w-[80%] mx-auto container">
        <Link href="/">
          <Image src={Logo} alt="logo NJ" />
        </Link>
        {/* <!-- mobile-menu --> */}
        <SideNavbar />

        <div className="hidden lg:flex items-center">
          <ul className="flex space-x-12 mr-12">
            <li className="text-[#012857] transition-all duration-300 ease hover:text-[#43BECA]">
              <Link
                href="/Design"
                className={router.pathname == "/Design" ? "font-bold" : ""}
              >
                Design
              </Link>
            </li>
            <li className="text-[#012857] transition-all duration-300 ease hover:text-[#43BECA]">
              <Link
                href="/Website"
                className={router.pathname == "/Website" ? "font-bold" : ""}
              >
                Website
              </Link>
            </li>
            <li className="text-[#012857] transition-all duration-300 ease hover:text-[#43BECA] ">
              <Link
                href="/Apropos"
                className={router.pathname == "/Apropos" ? "font-bold" : ""}
              >
                A propos
              </Link>
            </li>
          </ul>
          <div className="flex space-x-8 items-center">
            <a
              href="#"
              className="text-[#012857] transition-all duration-300 ease hover:text-[#43BECA]"
            >
              FR
            </a>
            <a
              href="#"
              className="text-[#012857] transition-all duration-300 ease hover:text-[#43BECA]"
            >
              EN
            </a>
            <a
              href="mailto:hello@medjio.fr"
              className="bg-gradient-to-r from-[#012857] via-[#012857] to-[#43BECA] text-white transition-all duration-300 ease hover:px-7 hover:shadow-xl px-5 py-3 rounded-[4px]"
            >
              hello@medjio.fr
            </a>
          </div>
        </div>
      </div>
      {children}
    </nav>
  );
};

export default Navbar;
