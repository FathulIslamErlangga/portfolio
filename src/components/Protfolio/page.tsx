import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-36 pb-[120px] bg-[#ff6ea8]">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-20">
            <h3 className="font-bold text-lg text-black mb-1 ">PORTFOLIO</h3>
            <h5 className="text-sm font-semibold text-black">
              Project yang telah dibuat
            </h5>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap m-auto justify-center xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image src="/images/todo.png" alt="" width={450} height={450} />
            </div>
            <h3 className="font-semibold text-black text-xl mt-10">
              <Link href="https://task-todolist-gamma.vercel.app/">
                Task To Do List
              </Link>
            </h3>
            <p className="text-sm text-black mt-2">
              Membuat sebuah todolist untuk tugas-tugas yang akan dikerjakan,
              seperti fitur-fitur apa aja yang ingin dibuat
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <Image
                src="/images/goto.png"
                alt="goto"
                width={450}
                height={450}
              />
            </div>
            <h3 className="font-semibold text-black text-xl mt-10">
              <Link href="https://replicate-goto.vercel.app/">
                Replicate web Goto
              </Link>
            </h3>
            <p className="text-sm text-black mt-2">
              Membuat replicate web goto untuk belajar dalam mendesign web
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
