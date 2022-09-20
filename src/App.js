import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
        <Route path="/contactme" element={<ContactMe></ContactMe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
