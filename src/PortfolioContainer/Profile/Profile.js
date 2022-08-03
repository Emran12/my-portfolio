import React from "react";
import Typical from "react-typical";
import img from "../Profile/profilepic.png";
const Profile = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10  sm:pb-5 pt-10">
      <div className="pl-24">
        <h1 className="text-2xl">I'm Mohammad Emran Hossain</h1>
        <h1 className="text-3xl text-second font-bold mb-6 pt-3">
          <Typical
            loop={Infinity}
            steps={[
              "Junior Front-end Developer",
              1500,
              "Junior Full Stack Developer",
              1500,
              "Junior Back-end Developer ",
              1500,
            ]}
          ></Typical>
        </h1>

        <p className="mt-12">
          <a href="resume.pdf" download="emran hossain" alt="">
            {" "}
            <button className="text-white uppercase border border-second p-3 rounded-full">
              download resume
            </button>
          </a>
        </p>
      </div>
      <div className="pl-12">
        <div className="avatar">
          <div className="w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
