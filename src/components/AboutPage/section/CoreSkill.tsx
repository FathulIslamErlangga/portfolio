import React from "react";

const CoreSkill = () => {
  return (
    <section className="pt-28">
      <div className="hero bg-primary mx-auto rounded-lg w-[80%]">
        <div className="hero-content lg:flex   p-5">
          <div className="lg:flex lg:items-center lg:justify-between text-white">
            <h1 className="text-2xl lg:w-full text-center font-semibold justify-start lg:inline">
              BRIEF BIO
            </h1>
            <div className="pt-5 lg:pt-0 lg:justify-center items-center flex flex-wrap gap-3 mx-auto">
              <span className=" text-lg">Front-End Skills:</span>
              <p className="text-sm lg:text-lg">
                Technologies like HTML, CSS, JavaScript, React, Vue
              </p>
              <span className="text-lg lg:text-lg">Back-End Skills:</span>
              <p className=" text-sm lg:text-lg">
                Frameworks and languages like Node.js, Express,Laravel
              </p>
              <span className="text-lg">DevOps & Tools</span>
              <p className=" text-sm lg:text-lg">
                Tools used in development, such as Docker, Git, Laragon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSkill;
