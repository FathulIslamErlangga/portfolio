import React from "react";

const BriefBio = () => {
  return (
    <section className="pt-28">
      <div className="hero bg-primary mx-auto rounded-lg w-[80%]">
        <div className="hero-content lg:flex   p-5">
          <div className="lg:flex lg:items-center lg:justify-between text-white">
            <h1 className="text-2xl lg:w-[50%] text-center font-semibold justify-start lg:inline">
              BRIEF BIO
            </h1>
            <p className="py-6 text-justify text-sm lg:text-lg lg:w-[50%] lg:pr-14 lg:justify-end lg:inline">
              Skilled in web development with a focus on responsive design, data
              management, and high performance. Experienced in working on web
              projects using front-end technologies such as React and Vue.js, as
              well as back-end frameworks like Laravel and Express.js, with the
              goal of delivering an optimal and efficient user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefBio;
