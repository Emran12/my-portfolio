import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import network from "../../images/network.PNG";

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
    <div className="bg-first" id="contactme">
      <h1 className="text-center text-3xl pt-5">Contact Me</h1>
      <div className="mt-24 grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        <div className="text-center p-3">
          <p className="pb-3">Lets Keep in Touch</p>
          <img className="pl-24" src={network} alt="" />
        </div>
        <div className="mb-12 mr-24">
          <form
            className="grid grid-cols-1 gap-5 "
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="h-12 text-first"
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
