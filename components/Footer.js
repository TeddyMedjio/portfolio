import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/img/logobleu.svg";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F6BB42]">
      <div className=" flex items-center justify-between w-[80%] mx-auto container py-8  ">
        <Link href="/">
          <Image src={Logo} alt="logo NJ" className="h-auto" />
        </Link>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex space-x-12 mr-12">
            <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA]">
              <Link
                href="/design"
                className={
                  router.pathname == "/design"
                    ? "text-darkBlue font-medium"
                    : ""
                }
              >
                Design
              </Link>
            </li>
            <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA]">
              <Link
                href="/web-site"
                className={
                  router.pathname == "/web-site"
                    ? "text-darkBlue font-medium"
                    : ""
                }
              >
                Website
              </Link>
            </li>
            <li className="text-darkBlue transition-all duration-300 ease hover:text-[#43BECA] ">
              <Link
                href="/a-propos"
                className={
                  router.pathname == "/about" ? "text-darkBlue font-medium" : ""
                }
              >
                A propos
              </Link>
            </li>
          </ul>

          <a
            href="mailto:hello@medjio.me"
            className="bg-gradient-to-r from-[#012857] via-[#012857] to-[#43BECA] text-white transition-all duration-300 ease hover:px-7 hover:shadow-xl px-5 py-3 rounded-[4px]"
          >
            hello@medjio.me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
