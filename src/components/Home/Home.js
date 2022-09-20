import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import AboutMe from "../AboutMe/AboutMe";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <Profile></Profile>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Skills></Skills>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
