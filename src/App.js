import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AbouteMe/AboutMe";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Header from "./PortfolioContainer/Header/Header";
import Profile from "./PortfolioContainer/Profile/Profile";

function App() {
  return (
    <div className="bg-first text-white">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/contactme" element={<ContactMe></ContactMe>}></Route>
      </Routes>
    </div>
  );
}

export default App;
