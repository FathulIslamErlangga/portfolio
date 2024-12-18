import React from "react";

const Experience = () => {
  return (
    <section className="pt-32">
      <div className="text-center font-semibold text-4xl pb-10">
        <h1>Experience</h1>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2019-2020</time>
              <div className="text-lg text-primary  font-semibold">
                Executive Essistant
              </div>
              <div>
                <div className=" flex flex-wrap ">
                  <span className="bg-primary rounded-full  w-3 h-3 mt-1"></span>
                  <span className="ml-2  w-[63%]">
                    Recording the submission of new motor vehicle retrieval
                    applications
                  </span>
                </div>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10  text-start">
              <time className="font-mono italic t">2021-Present</time>
              <div className="text-lg pb-5 text-start text-primary font-semibold">
                Lazada Logistic
              </div>
              <div>
                <div className=" flex flex-wrap ">
                  <span className="bg-primary rounded-full  w-3 h-3 mt-1"></span>
                  <span className="ml-2">
                    Manage stock inventory operational
                  </span>
                </div>
                <div className="pb-2 flex flex-wrap">
                  <span className="bg-primary rounded-full w-3 h-3 mt-2"></span>
                  <span className=" ml-2 w-[63%]">
                    Daily employee attendance summary for each operational hour
                  </span>
                </div>
                <div className="pb-2 flex flex-wrap">
                  <span className="bg-primary rounded-full w-3 h-3 mt-1"></span>
                  <span className="ml-2 w-[63%]">
                    Handling the loan of scanner devices and laptops for
                    operational needs
                  </span>
                </div>
                <div className="pb-2 flex flex-wrap">
                  <span className="bg-primary rounded-full w-3 h-3 mt-2"></span>
                  <span className="ml-2 w-[63%]">
                    Handle employee permits and attendance Recording damaged
                    devices
                  </span>
                </div>
              </div>
            </div>

            <hr className="bg-primary" />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
