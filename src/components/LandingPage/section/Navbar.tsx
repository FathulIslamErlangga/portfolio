"use client";

import NavLink from "@/components/elements/NavLink";
import ToggleNav from "@/components/elements/ToggleNav";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinksMobile from "../MobileVersion/Navbar/NavLinksMobile";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const hendleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", hendleScroll);

    return () => {
      window.removeEventListener("scroll", hendleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full  flex items-center top-0 left-0 right-0 bg-transparent z-10 ${
        isScroll ? "blur-nav" : "absolute"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href="#"
              className="font-bold text-lg text-primary block py-6"
            >
              Fathul Islam Erlangga
            </Link>
          </div>
          <div className="flex items-center px-4">
            <ToggleNav />
            <NavLink />
            <NavLinksMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
