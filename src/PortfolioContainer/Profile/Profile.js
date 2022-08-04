import React from "react";
import Typical from "react-typical";
import img from "../Profile/profilepic.png";
const Profile = () => {
  return (
    <div className="flex flex-wrap justify-evenly pt-6">
      <div className="flex flex-col items-center justify-center w-1/2">
        <h1 className="text-2xl">I'm Mohammad Emran Hossain</h1>
        <h1 className="text-3xl text-second font-bold mb-6 pt-3">
          <Typical
            loop={Infinity}
            steps={[
              "Junior Full Stack Developer",
              1500,
              "Junior Mern Stack Developer",
              2500,
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
      <div className="p-12">
        <div className="avatar">
          <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
