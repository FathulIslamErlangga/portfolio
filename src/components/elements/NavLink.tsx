import React from "react";
import Navs from "../parts/Navs";
import Link from "next/link";

const NavLink = () => {
  return (
    <Navs className="absolute py-5  bg-transparent right-4 max-w-[250px]  w-full top-full rounded-lg lg:bg-transparent lg:max-w-full lg:static lg:shadow-none  lg:rounded-none ">
      <ul className="hidden lg:flex ">
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
          <Link href="/Aboutme" className="text-base text-black py-2 mx-8 flex">
            About Me
          </Link>
        </li>
      </ul>
    </Navs>
  );
};

export default NavLink;
