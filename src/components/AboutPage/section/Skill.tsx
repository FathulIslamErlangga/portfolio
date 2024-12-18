import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <section className=" pt-36 ">
      <div className="bg-transparent py-10 container mx-auto w-full rounded-lg relative">
        <h1 className="text-2xl text-primaryDark text-center font-semibold tracking-wide">
          Core Skill
        </h1>
        <div className="flex-wrap gap-5  pt-10 place-self-center flex lg:gap-10 lg:mx-5 ">
          <div>
            <Image
              src="/images/document.png"
              alt=""
              width={50}
              height={50}
              className="mt-1"
            />
            <span className="ml-1">vue js</span>
          </div>
          <div>
            <Image
              src="/images/js.png"
              alt=""
              width={50}
              height={50}
              className="mt-1"
            />
            <span className="">javascript</span>
          </div>
          <div>
            <Image
              src="/images/programing.png"
              alt=""
              width={50}
              height={50}
              className="mt-1"
            />
            <span className="ml-3">PHP</span>
          </div>
          <div>
            <Image
              src="/images/structure.png"
              alt=""
              width={50}
              height={50}
              className="mt-1"
            />
            <span className="ml-2">React</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
