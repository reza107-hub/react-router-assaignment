import React, { useEffect, useState } from "react";
import SingleJobCat from "./SingleJobCat";

const JobCat = () => {
  const [jobCat, setJobCat] = useState([]);
  useEffect(() => {
    fetch("/jobcat.json")
      .then((res) => res.json())
      .then((data) => setJobCat(data.categories));
  }, []);
  return (
    <div className="mt-28 md:w-4/5 mx-auto">
      <p className="text-4xl font-semibold text-center">Job Category List</p>
      <p className="text-[#757575] text-center my-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 gap-5">
        {jobCat.map((singleJobCat) => (
          <SingleJobCat key={singleJobCat.id} singleJobCat={singleJobCat} />
        ))}
      </div>
    </div>
  );
};

export default JobCat;
