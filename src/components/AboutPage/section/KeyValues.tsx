import React from "react";
import Image from "next/image";

function KeyValues() {
  return (
    <section className="bg-primaryWhite h-auto ">
      <div className="container-lg p-10">
        <div className="flex flex-wrap ">
          <div className=" mx-auto self-center lg:w-1/2 lg:pl-10">
            <Image
              className="mx-w-full mx-auto hidden  lg:block"
              src="/images/work.png"
              alt="Service page"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full  pt-5 self-end lg:w-1/2 ">
            <div className="px-5">
              <h1 className="font-semibold text-black text-3xl text-center pb-10">
                Key Values
              </h1>
              <div className="pb-5">
                <span className="text-black ml-4 block">
                  Menjunjung tinggi ketepatan waktu, kualitas pekerjaan yang
                  teliti, dan komunikasi transparan untuk mendukung kolaborasi
                  yang sukses.
                </span>
              </div>
              <div className="pb-5">
                <span className="text-black ml-4 block">
                  Berfokus pada ketepatan waktu, detail yang sempurna, dan
                  komunikasi yang terbuka untuk mencapai hasil terbaik dalam
                  setiap proyek.
                </span>
              </div>
              <div className="pb-5">
                <span className="text-black ml-4 block">
                  Mengedepankan profesionalisme dengan bekerja secara tepat
                  waktu, teliti, dan menjaga komunikasi yang efektif dengan
                  semua pihak.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyValues;
