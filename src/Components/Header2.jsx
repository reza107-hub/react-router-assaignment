import React from "react";
import headerImage from "/Vector.png";
import headerImage2 from "/Vector-1.png";

const Header2 = ({ children }) => {
  return (
    <div
      className="md:h-[300px] font-bold text-xl h-36 pt-20 md:pt-0 flex justify-center items-center -mt-16"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%), url(${headerImage}), url(${headerImage2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom, left bottom, right top",
      }}
    >
      {children ? children : ""}
    </div>
  );
};

export default Header2;
