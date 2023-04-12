import React, { useEffect, useState } from "react";
import SingleFeaturedJob from "./SingleFeaturedJob";

const FeaturedJob = () => {
  // const jobs = data.jobs;
  const [jobs, setJobs] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const handleViewAll = () => {
    setViewAll(!viewAll);
  };
  useEffect(() => {
    fetch("/feturedJob.json")
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs));
  }, []);
  
  return (
    <div className="mt-44 md:w-[80%] md:mx-auto">
      <div>
        <p className="text-4xl font-semibold text-center">Featured Jobs</p>
        <p className="text-[#757575] text-center my-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-8">
        {jobs &&
          jobs
            .slice(0, viewAll ? jobs.length : 4)
            .map((singleJob) => (
              <SingleFeaturedJob key={singleJob.id} singleJob={singleJob} />
            ))}
      </div>
      <div className="text-center">
        <button onClick={handleViewAll} className="btn-main mt-8">
          {viewAll ? "See Less" : "See All Jobs"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
