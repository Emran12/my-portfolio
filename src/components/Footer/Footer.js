import React from "react";
import gmail from "../../images/gmail.svg";
import linkedIn from "../../images/linkedIn.svg";
import whatsApp from "../../images/whatsApp.svg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content">
      <div>
        <span className="footer-title text-green-500">Services</span>
        <a className="">Front End Development</a>
        <a className="">Back End Development</a>
        <a className="">MERN Stack Development</a>
        <a className="">Full Stack Development</a>
      </div>
      <div>
        <span className="footer-title text-green-500">Important Links</span>
        <a
          href="https://javascript.info/"
          target="_blank"
          rel="noreferrer noopener"
        >
          JS
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Rect JS
        </a>
        <a
          href="https://nodejs.org/en/docs/guides/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Node JS
        </a>
        <a
          href="https://expressjs.com/en/4x/api.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Express JS
        </a>
        <a
          href="https://mongoosejs.com/docs/guides.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Mongoose
        </a>
      </div>
      <div>
        <span className="footer-title text-green-500">Contact</span>
        <div className="grid grid-flow-col gap-4">
          <div className="text-center p-3">
            <div className="flex items-center mb-6">
              <img src={gmail} className="w-8 h-8 rounded mr-4"></img>
              <p>emran.hossain0695@gmail.com</p>
            </div>
            <div className="flex items-center mb-6 ">
              <img src={whatsApp} className="w-8 h-8 rounded mr-4" alt=""></img>
              <p>+880 1687929238</p>
            </div>
            <div className="flex items-center mb-6">
              <img
                src={linkedIn}
                className="w-8 h-8 rounded mr-4 "
                alt=""
              ></img>
              <a
                href="https://www.linkedin.com/in/emran-hossain95/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
