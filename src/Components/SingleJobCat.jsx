import React from "react";

const SingleJobCat = ({ singleJobCat }) => {
  const { id, category_logo, category_name, jobs_available } = singleJobCat;
  return (
    <div className="bg-card p-9 flex flex-col justify-center items-center md:block">
      <img className="bg-card p-4" src={category_logo} alt="" />
      <p className="text-[#474747] font-semibold my-5">{category_name}</p>
      <p className="text-[#A3A3A3] font-thin">{jobs_available}</p>
    </div>
  );
};

export default SingleJobCat;
