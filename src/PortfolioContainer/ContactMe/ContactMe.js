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
      <div className="mt-20 flex flex-wrap justify-evenly space-x-5">
        <div className="text-center p-3">
          <p className="pb-3">Lets Keep in Touch</p>
          <div>
            <img src={gmail} className="w-14 h-14"></img>
            <p>Gmail</p>
          </div>
          <div>
            <img src={whatsApp} className="w-14 h-14"></img>
            <p>WhatsApp</p>
          </div>
          <div>
            <img src={linkedIn} className="w-14 h-14"></img>
            <p>LinkedIn</p>
          </div>
          <div>
            <img src={fb} className="w-14 h-14"></img>
            <p>Facebook</p>
          </div>
        </div>
        <div className="mb-12">
          <form
            className="grid grid-cols-1 gap-5 "
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="h-12 text-first w-auto"
              type="text"
              name="name"
              id=""
              placeholder="Enter Name"
              required
            />
            <input
              className="h-12 text-first"
              type="email"
              name="email"
              id=""
              placeholder="Enter Email"
              required
            />
            <textarea
              className="text-first"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <input
              className="border border-black w-fit uppercase p-3 rounded-full font-bold"
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
