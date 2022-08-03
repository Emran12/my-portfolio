import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="bg-first">
      <Profile></Profile>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
