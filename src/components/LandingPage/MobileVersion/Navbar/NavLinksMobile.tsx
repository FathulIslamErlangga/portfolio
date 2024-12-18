"use client";
import React from "react";
import Link from "next/link";
import NavsMobile from "./NavsMobile";
import { useGlobalStateContext } from "@/components/contexts/GlobalProvider";

const NavLinksMobile = () => {
  const { isToggle } = useGlobalStateContext();
  return (
    <>
      {isToggle && (
        <NavsMobile className="absolute py-5  bg-white right-4 max-w-[250px] shadow-lg w-full top-full rounded-lg lg:bg-transparent lg:max-w-full lg:static lg:shadow-none  lg:rounded-none ">
          <ul className="block lg:flex ">
            <li className="group">
              <Link href="/" className="text-base text-black py-2 mx-8 flex">
                Beranda
              </Link>
            </li>
            <li className="group">
              <Link
                href="/portfolio"
                className="text-base text-black py-2 mx-8 flex"
              >
                Portfolio
              </Link>
            </li>
            <li className="group">
              <Link
                href="/Aboutme"
                className="text-base text-black py-2 mx-8 flex"
              >
                About Me
              </Link>
            </li>
          </ul>
        </NavsMobile>
      )}
    </>
  );
};

export default NavLinksMobile;
