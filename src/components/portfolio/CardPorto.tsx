import React from "react";
import Image from "next/image";
import Link from "next/link";
const CardPorto = () => {
  return (
    <>
      {/* // CARD ONE */}
      <div className="container ">
        <div className="grid grid-cols-1 pb-5 px-4 lg:grid-cols-4 gap-4">
          <div className="card card-compact bg-base-100 shadow-xl  max-w-xs w-full lg:card-side lg:col-span-2 lg:max-w-[100%] ">
            <figure>
              <Image
                src="/images/yida.jpg"
                alt="Movie"
                width={250}
                height={250}
              />
            </figure>
            <div className="card-body w-full lg:w-[50%] text-justify">
              <h2 className="card-title text-primary">Yida</h2>
              <p>
                This project focuses on developing a web-based inventory
                management system for logistics businesses. The system is
                designed to streamline asset device borrowing for operations,
                asset management, and real-time reporting on borrowed assets. It
                also supports multi-site functionality to monitor assets across
                different locations.
              </p>
              <div className="flex  justify-between w-full items-center pt-10">
                <div className="flex justify-start">
                  <div className="flex flex-wrap gap-1 pl-2">
                    <div className=" bg-primary rounded-full w-5">-</div>
                    <span>Laravel</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="/portfolioDetail"
                    className=" text-sm text-slate-500"
                  >
                    Link
                  </Link>
                  <Link
                    href="/portfolioDetail"
                    className=" text-sm text-slate-500"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl  max-w-xs w-full lg:card-side lg:col-span-2 lg:max-w-[100%] ">
            <figure>
              <Image
                src="/images/blog.png"
                alt="Movie"
                width={250}
                height={250}
              />
            </figure>
            <div className="card-body w-full lg:w-[50%] text-justify">
              <h2 className="card-title text-primary ">Blogtivus</h2>
              <p>
                This project aims to create a modern blog application with
                interactive features such as photo galleries, content
                management, and ad support. Its primary target audience is
                content creators and readers who seek a fast, engaging, and
                informative reading experience.
              </p>
              <div className="flex  justify-between w-full items-center pt-10">
                <div className="flex justify-start">
                  <div className="flex flex-wrap gap-1 pl-2">
                    <div className=" bg-primary rounded-full w-5">-</div>
                    <span>Next.js</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="/portfolioDetail"
                    className=" text-sm text-slate-500"
                  >
                    Link
                  </Link>
                  <Link
                    href="/portfolioDetail"
                    className=" text-sm text-slate-500"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPorto;
