import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleAppliedJob = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="bg-white border border-solid border-[#E8E8E8] p-5 rounded-lg md:flex items-center justify-between mt-6">
        <div className="md:flex gap-5">
          <div className="bg-card px-5 flex justify-center items-center">
            <img className=" h-9 w-20  " src={company_logo} alt="" />
          </div>

          <div className="mt-4 gap-8">
            <p className="font-bold mb-2">{job_title}</p>
            <p className="font-thin text-[#474747]">{company_name}</p>
            <div className="flex mt-4 gap-8">
              <p className="text-main border border-solid rounded-sm py-2 px-4">
                {remote_or_onsite}
              </p>
              <p className="text-main border border-solid rounded-sm py-2 px-4">
                {fulltime_or_parttime}
              </p>
            </div>
            <div className="mt-4 text-[#757575] font-thin md:flex gap-3">
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> {location}
              </p>
              <p>
                <FontAwesomeIcon icon={faDollarSign} /> &nbsp; salary: {salary}
              </p>
            </div>
          </div>
        </div>

        <Link to={`/job/${id}`}>
          <button className="btn-main mt-5 hover:bg-cyan-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleAppliedJob;
