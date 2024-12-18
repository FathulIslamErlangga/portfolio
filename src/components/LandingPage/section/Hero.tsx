'use client'
import Link from "next/link";
import Image from "next/image";

const HeroPage = () => {
  return (
    <section id="home" className="pt-36 pb-[110px]">
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="w-full self-center px-12 lg:w-1/2">
            <h1 className="text-base font-semibold  md:text-lg lg:text-xl">
              My Name{" "}
              <span className="block text-black text-3xl mt-1 font-bold">
                {" "}
                Fathul Islam Erlangga
              </span>
            </h1>
            <h3 className="font-medium text-slate-500 text-lg mb-5 lg:text-lg md:text-sm sm:text-sm">
              Students <span className="text-primary">Web Developer</span>🎓
            </h3>
            <p className="text-skate-500  mb-10 leading-relaxed lg:text-lg md:text-sm sm:text-sm">
              Transforming your business with high-performance web solutions
              that drive growth and innovation.
            </p>
            <div className="m-5">
              <div className="bg-primary lg:w-[20%] w-full text-center rounded-md p-2 text-white ">
                <Link
                  href="mailto:fathulislamerlangga@gmail.com?subject=Hello&body=This%20is%20a%20test%20message"
                  className=""
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 -top-10">
              <Image
                className="mx-w-full mx-auto"
                src="/images/my-picture.png"
                alt=""
                width={210}
                height={210}
              />
              <span className="absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 lg:-bottom-5 lg:-right-4">
                <Image
                  src="/svg/blob.svg"
                  alt=""
                  width={400}
                  height={400}
                  className="scale-[2.4] lg:scale-[1.3]"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroPage;
