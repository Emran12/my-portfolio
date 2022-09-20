import React from "react";
import programmer from "../../images/programmer.jpg";

const AboutMe = () => {
  return (
    <div
      className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-5 items-center mt-5"
      id="aboutme"
    >
      <div className="pl-10 pr-10">
        <h1 className="text-center text-3xl text-green-500 font-bold">
          About Me
        </h1>
        <p className="tracking-wide mt-16">
          A passionate MERN stack developer and a problem solver. I am highly
          skilled with HTML, CSS, Bootstrap, Tailwind CSS, JS, and React JS, and
          comfortable with Node JS, Express JS, and MongoDB. I have completed
          some projects with the above technologies. I have solved many problems
          in different online judges using c and c++. Now I would like to work
          in an organization where I can implement my knowledge & skills to
          achieve the company’s goals as well as improve my knowledge.
        </p>
      </div>
      <div className="w-3/4 pl-5">
        <img src={programmer} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
