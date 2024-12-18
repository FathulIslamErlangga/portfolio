import React from "react";
import Image from "next/image";
const Testimoni = () => {
  return (
    <section className="pt-32">
      <div className="container-lg">
        <h1 className="text-primary font-semibold text-center text-3xl">
          Testimoni
        </h1>
        <div className="grid grid-cols-1 pb-5 mt-32 ml-4 px-4 sm:grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="bg-primaryWhite rounded-lg shadow-lg shadow-primaryDark p-8 w-full relative flex justify-center">
            <div className="absolute -top-10 flex justify-center items-center rounded-full  ">
              <Image
                className="max-w-[30%] bg-white  rounded-full  p-3  lg:max-w-full  lg:p-2 lg:w-[100px]"
                src="/images/avatar.jpeg"
                alt="hero page"
                width={350}
                height={350}
              />
            </div>
            <div className="py-14">
              <h1 className="text-primaryDark text-center font-semibold text-2xl lg:text-lg ">
                Operations Manager
              </h1>
              <div className="flex flex-wrap justify-center py-5 ">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    className="mx-w-full mx-2   lg:block"
                    src="/images/star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="py-5 px-2">
                <span className="text-slate-500 relative">
                  <Image
                    className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                    src="/images/quote.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  The inventory system developed has been incredibly helpful in
                  tracking our company assets. All processes are now more
                  efficient, and we can monitor assets across multiple locations
                  in real-time.
                  <Image
                    className="mx-w-full mx-2  absolute bottom-0 -right-7 lg:block"
                    src="/images/double-quotes.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-primaryWhite rounded-lg shadow-lg shadow-primaryDark p-8 w-full relative flex justify-center">
            <div className="absolute -top-10 flex justify-center items-center rounded-full  ">
              <Image
                className="max-w-[30%] bg-white   rounded-full  p-3  lg:max-w-full  lg:p-2 lg:w-[100px]"
                src="/images/avatar.jpeg"
                alt="hero page"
                width={350}
                height={350}
              />
            </div>
            <div className="py-14">
              <h1 className="text-primaryDark text-center font-semibold text-2xl lg:text-lg ">
                Head of IT
              </h1>
              <div className="flex flex-wrap justify-center py-5 ">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    className="mx-w-full mx-2   lg:block"
                    src="/images/star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="py-5 px-2">
                <span className="text-slate-500 relative">
                  <Image
                    className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                    src="/images/quote.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  This team is extremely professional! The system they built not
                  only simplified asset management but also improved the
                  accuracy of our reports by up to 30%.
                  <Image
                    className="mx-w-full mx-2  absolute bottom-0 -right-7 lg:block"
                    src="/images/double-quotes.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-primaryWhite rounded-lg shadow-lg shadow-primaryDark p-8 w-full relative flex justify-center">
            <div className="absolute -top-10 flex justify-center items-center rounded-full  ">
              <Image
                className="max-w-[30%] bg-white   rounded-full  p-3  lg:max-w-full  lg:p-2 lg:w-[100px]"
                src="/images/avatar.jpeg"
                alt="hero page"
                width={350}
                height={350}
              />
            </div>
            <div className="py-14">
              <h1 className="text-primaryDark text-center font-semibold text-2xl lg:text-lg ">
                Warehouse Supervisor
              </h1>
              <div className="flex flex-wrap justify-center py-5 ">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    className="mx-w-full mx-2   lg:block"
                    src="/images/star.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
              </div>
              <div className="py-5 px-2">
                <span className="text-slate-500 relative">
                  <Image
                    className="mx-w-full mx-2  absolute top-0 -left-7 lg:block"
                    src="/images/quote.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                  We are very impressed with the ease of use and the real-time
                  notification features in this system. It has significantly
                  improved our daily operations
                  <Image
                    className="mx-w-full mx-2  absolute bottom-0 -right-7 lg:block"
                    src="/images/double-quotes.png"
                    alt="star"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
