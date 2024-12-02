"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <button
              className="absolute block right-4 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`w-[30px] h-[2px] my-2 block bg-black ${
                  isOpen ? "origin-top-left rotate-45" : " "
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] my-2 block bg-black ${
                  isOpen ? "scale-0" : " "
                }`}
              ></span>
              <span
                className={`w-[30px] h-[2px] my-2 block bg-black ${
                  isOpen ? "origin-bottom-left -rotate-45" : " "
                }`}
              ></span>
            </button>
            <nav
              className={`${
                isOpen ? " " : "hidden "
              } absolute py-5  bg-white right-4 max-w-[250px] shadow-lg w-full top-full rounded-lg lg:bg-transparent lg:max-w-full lg:static lg:shadow-none  lg:rounded-none `}
            >
              <ul className="block lg:flex ">
                <li className="group">
                  <Link
                    href="#"
                    className="text-base text-black py-2 mx-8 flex"
                  >
                    Beranda
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#"
                    className="text-base text-black py-2 mx-8 flex"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
