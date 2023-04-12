import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header2 from "./Header2";
import { addToDb, getAppliedJob } from "../utilities/fakedb";
import Swal from 'sweetalert2'

const JobDetails = () => {
  const data = useLoaderData();
  const jobArr = data.jobs;
  const { jobId } = useParams();

  const job = jobArr.find((job) => job.id === Number(jobId));
  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
    location,
  } = job;
  const handleButtonClick = (id) => {
    const appliedJobs = getAppliedJob();
    if (appliedJobs.hasOwnProperty(id)) {
      Swal.fire({
        title: '👍',
        text: 'You Already Applied the Job',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else {
      addToDb(id);
    }
  };

  return (
    <div>
      <Header2>Job Details</Header2>
      <div className="mt-32 md:w-[80%] mx-2 md:mx-auto md:flex gap-6">
        <div className="md:w-7/12">
          <p className="font-bold text-base">
            Job Description:&nbsp;
            <span className="text-[#757575] font-thin">{job_description}</span>
          </p>
          <p className="font-bold text-base mt-6">
            Job Responsibility:&nbsp;
            <span className="text-[#757575] font-thin">
              {job_responsibility}
            </span>
          </p>
          <p className="font-bold text-base mt-6">
            Educational requirements: <br /> <br />
            <span className="text-[#757575] font-thin">
              {educational_requirements}
            </span>
          </p>
          <p className="font-bold text-base mt-6">
            Experiences: <br /> <br />
            <span className="text-[#757575] font-thin">{experiences}</span>
          </p>
        </div>
        <div>
          <div className="bg-card rounded-lg md:p-7 mt-7 md:mt-0">
            <p className="font-bold text-lg">Job Details</p>
            <hr className="my-6" />
            <p className="flex gap-3 mb-4">
              <img src="https://i.ibb.co/NLGnpVx/Frame.png" alt="" />{" "}
              <span className="font-semibold">salary :</span>{" "}
              <span className="text-[#757575]">{salary}</span>
            </p>
            <p className="flex gap-3">
              <img src="https://i.ibb.co/jD4nr31/Frame-1.png" alt="" />
              <span className="font-semibold">Job Title :</span>{" "}
              <span className="text-[#757575]">{job_title}</span>
            </p>

            <p className="font-bold mt-7 text-lg">Contact Information</p>
            <hr className="my-6" />
            <p className="flex gap-3">
              <img src="https://i.ibb.co/HDRytBc/Frame-2.png" alt="" />
              <span className="font-semibold">Phone :</span>{" "}
              <span className="text-[#757575]">
                {contact_information.phone}
              </span>
            </p>
            <p className="flex gap-3 my-4">
              <img src="https://i.ibb.co/h7Fw1Fx/Frame-3.png" alt="" />
              <span className="font-semibold">Email :</span>{" "}
              <span className="text-[#757575]">
                {contact_information.email}
              </span>
            </p>
            <p className="flex gap-3">
              <img src="https://i.ibb.co/F0qm4kH/Frame-4.png" alt="" />
              <span className="font-semibold">Address :</span>{" "}
              <span className="text-[#757575]">{location}</span>
            </p>
          </div>
          {
            <button
              onClick={() => handleButtonClick(id)}
              className="btn-main mt-7 w-full hover:bg-gradient-to-l hover:bg-cyan-800"
            >
              Apply Now
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
