import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Profile></Profile>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
