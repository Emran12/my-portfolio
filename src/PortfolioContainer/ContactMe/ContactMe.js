import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import fb from "../../images/fb.svg"
import gmail from "../../images/gmail.svg"
import linkedIn from "../../images/linkedIn.svg"
import whatsApp from "../../images/whatsApp.svg"

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rr46bg5",
        "template_qov3oop",
        form.current,
        "V_BYvZ-rPpVtRHJzC"
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
    <div  id="contactme">
      <h1 className="text-center text-3xl pt-5">Contact Me</h1>
      <div className="mt-20 flex flex-wrap justify-evenly">
        <div className="text-center p-3">
          <div className="flex items-center mb-6" >
            <img src={gmail} className="w-14 h-14 rounded mr-4"></img>
            <p>emran.hossain0695@gmail.com</p>
          </div>
          <div className="flex items-center mb-6 ">
            <img src={whatsApp} className="w-14 h-14 rounded mr-4"></img>
            <p>+880 1687929238</p>
          </div>
          <div className="flex items-center mb-6" >
            <img src={linkedIn} className="w-14 h-14 rounded mr-4"></img>
            <a href="https://www.linkedin.com/in/emran-hossain95/" target="_blank">LinkedIn</a>
          </div>
          <div className="flex items-center mb-6" >
            <img src={fb} className="w-14 h-14"></img>
            <a href="https://www.facebook.com/profile.php?id=100010072651709"  target="_blank">facebook</a>
          </div>
        </div>
        <div className="mb-12">
          <form
            className="flex flex-col space-y-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
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
              className="border rounded-xl uppercase  pl-8 pr-8 pt-2 pb-2 font-bold"
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
