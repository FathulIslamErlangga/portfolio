import React from "react";

const DetailPorto = () => {
  return (
    <section className="flex pt-32">
      <div className="lg:flex-1 lg:w-full lg:p-6">
        <h1></h1>
        <div className="w-[60%] lg:mx-auto lg:px-10 justify-center">
          <div className="pb-10 text-justify">
            <h1 className="text-primary font-semibold">Situation</h1>
            <p>
              A logistics company faced challenges in managing its operational
              assets, such as laptops and scanners, across multiple sites. The
              lack of a centralized system led to inefficiencies in tracking
              borrowed devices, managing asset availability, and generating
              real-time reports.{" "}
            </p>
          </div>
          <div className="pb-10 text-justify">
            <h1 className="text-primary font-semibold pb-3">Task</h1>
            <div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full  w-3 h-3 mt-2"></span>
                <span className="ml-2">
                  Facilitate borrowing and returning assets seamlessly.
                </span>
              </div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full w-3 h-3 mt-2"></span>
                <span className=" ml-2">
                  Provide real-time updates on asset usage and availability.
                </span>
              </div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full w-3 h-3 mt-2"></span>
                <span className="ml-2">
                  Generate comprehensive reports to improve operational
                  efficiency.
                </span>
              </div>
            </div>
          </div>
          <div className="pb-10 text-justify">
            <h1 className="text-primary font-semibold pb-3">Action</h1>
            <div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full  w-3 h-3 mt-1"></span>
                <span className="ml-2">
                  Designed and developed a responsive web application using full
                  laravel
                </span>
              </div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full w-3 h-3 mt-2"></span>
                <span className=" ml-2 w-[63%]">
                  Integrated real-time notifications using cornjob to alert
                  users and admins about due returns or asset unavailability.
                </span>
              </div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full w-3 h-3 mt-1"></span>
                <span className="ml-2">
                  Implemented a MySQL database to store asset records, borrowing
                  history, and user data.
                </span>
              </div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full w-3 h-3 mt-2"></span>
                <span className="ml-2 w-[63%]">
                  Conducted usability testing with employees and site managers
                  to ensure the system met operational needs.
                </span>
              </div>
            </div>
          </div>
          <div className="pb-10 text-justify">
            <h1 className="text-primary font-semibold pb-3">Result</h1>
            <div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full  w-3 h-3 mt-2"></span>
                <span className="ml-2 w-[73%]">
                  Enhanced user satisfaction, as reflected in feedback from
                  employees and managers who praised the system’s ease of use
                  and reliability.
                </span>
              </div>
              <div className="pb-2 flex flex-wrap">
                <span className="bg-primary rounded-full w-3 h-3 mt-2"></span>
                <span className="ml-2">
                  Delivered a scalable solution that supported the company’s
                  growth and multi-site operations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPorto;
