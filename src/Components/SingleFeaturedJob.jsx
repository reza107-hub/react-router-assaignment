import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SingleFeaturedJob = ({ singleJob }) => {
  const {
    id,
    company_logo,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
    company_name,
  } = singleJob;
  return (
    <div className="bg-white border border-solid border-[#E8E8E8] p-9 rounded-lg">
      <img className=" h-9 mb-8" src={company_logo} alt="" />
      <p className="font-bold mb-2">{job_title}</p>
      <p className="font-thin text-[#474747]">{company_name}</p>
      <div className="mt-4 flex gap-8">
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
          <FontAwesomeIcon icon={faDollarSign} /> &nbsp;
          salary: {salary}
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn-main mt-5 hover:bg-cyan-800">View Details</button>
      </Link>
    </div>
  );
};

export default SingleFeaturedJob;
