import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-16 pt-32 pb-5 md:w-[80%] md:mx-auto  justify-center items-center">
      <div className="text-center md:text-left">
        <p className="font-medium md:text-7xl text-4xl mb-5">
          One Step <br /> Closer To Your <br />
          <span className="text-main">Dream Job</span>
        </p>
        <p className="mb-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link className="btn-main hover:bg-cyan-800">Get Started</Link>
      </div>
      <div>
        <img src="P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
