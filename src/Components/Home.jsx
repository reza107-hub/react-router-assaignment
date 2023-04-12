import React, { useState } from "react";
import Header from "./Header";
import JobCat from "./JobCat";
import FeaturedJob from "./FeaturedJob";

const Home = () => {
  return (
    <div>
      <div className="bg-card -mt-28">
        <Header />
      </div>
      <JobCat />
      <FeaturedJob />
    </div>
  );
};

export default Home;
