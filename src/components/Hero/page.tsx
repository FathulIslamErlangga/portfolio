import Image from "next/image";

const HeroPage = () => {
  return (
    <section id="home" className="pt-36 pb-[120px]">
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="w-full self-center px-12 lg:w-1/2">
            <h1 className="text-base font-semibold  md:text-lg lg:text-xl">
              Nama Saya{" "}
              <span className="block text-black text-3xl mt-1 font-bold">
                {" "}
                Fathul Islam Erlangga
              </span>
            </h1>
            <h3 className="font-medium text-slate-500 text-lg mb-5 lg:text-lg md:text-sm sm:text-sm">
              Students <span className="text-primary">Web Developer</span>🎓
            </h3>
            <p className="text-black font-medium mb-10 leading-relaxed lg:text-lg md:text-sm sm:text-sm">
              Semua butuh proses dalam belajar,{" "}
              <span className="text-slate-500 block w-[80%]">
                Jangan insecure terhadap apapun yang dimiliki dan Jangan takut
                untuk mencoba
              </span>{" "}
              karena kegagalan terbesar adalah selalu takut untuk mencoba.
              <span className="block text-slate-500">
                semangat terus apapun yang terjadi😊
              </span>{" "}
            </p>
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
              <span className="absolute -bottom-5 -z-10 left-1/2 -translate-x-1/2">
                <Image
                  src="/svg/blob.svg"
                  alt=""
                  width={400}
                  height={400}
                  className="scale-[1.3]"
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
