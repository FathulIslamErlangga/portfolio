import React from "react";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  return (
    <section className="pt-32">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        Contact Us
      </h2>
      <form className="bg-primary p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-[50%] bg-slate-500  px-4 py-2 rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-black text-black"
        >
          Send Message
        </button>
      </form>
      <div className="flex-wrap gap-10  pt-10 place-self-center flex lg:mx-5 ">
        <Link href="mailto:fathulislamerlangga@gmail.com?subject=Hello&body=This%20is%20a%20test%20message">
          <Image
            src="/images/gmail.png"
            alt=""
            width={40}
            height={40}
            className="mt-1"
          />
        </Link>
        <Link href="www.linkedin.com/in/fathul-islam-erlangga-5402571b3">
          <Image
            src="/images/linkedin.png"
            alt=""
            width={40}
            height={40}
            className="mt-1"
          />
        </Link>
        <Link href="https://github.com/FathulIslamErlangga">
          <Image
            src="/images/github.png"
            alt=""
            width={40}
            height={40}
            className="mt-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
