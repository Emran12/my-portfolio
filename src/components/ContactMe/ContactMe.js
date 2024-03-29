import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import fb from "../../images/fb.svg";
import gmail from "../../images/gmail.svg";
import linkedIn from "../../images/linkedIn.svg";
import whatsApp from "../../images/whatsApp.svg";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bcthhvh",
        "template_8ice7fl",
        form.current,
        "R0TgQ1MV9PGulR8db"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contactme" className="mt-10">
      <h1 className="text-center text-3xl pt-5 text-green-500 font-bold">
        Contact Me
      </h1>
      <div className="mt-20 flex flex-wrap justify-evenly">
        <div className="text-center p-3">
          <div className="flex items-center mb-6">
            <img src={gmail} className="w-14 h-14 rounded mr-4"></img>
            <p>emran.hossain0695@gmail.com</p>
          </div>
          <div className="flex items-center mb-6 ">
            <img src={whatsApp} className="w-14 h-14 rounded mr-4" alt=""></img>
            <p>+880 1687929238</p>
          </div>
          <div className="flex items-center mb-6">
            <img
              src={linkedIn}
              className="w-14 h-14 rounded mr-4 "
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
          <div className="flex items-center mb-6">
            <img src={fb} className="w-14 h-14" alt=""></img>
            <a
              href="https://www.facebook.com/profile.php?id=100010072651709"
              target="_blank"
              rel="noreferrer noopener"
            >
              facebook
            </a>
          </div>
        </div>
        <div className="mb-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-5"
          >
            <input
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="user_name"
              placeholder="Enter Name"
              required
            />
            <input
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <textarea
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <input
              className="border rounded-xl uppercase  pl-8 pr-8 pt-2 pb-2 font-bold text-white bg-lime-700 hover:bg-green-600"
              type="submit"
              value="send message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
