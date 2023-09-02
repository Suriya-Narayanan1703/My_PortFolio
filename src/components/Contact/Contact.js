import React, { useRef } from "react";
import "./Contact.css";
import insta from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_khrp4xe",
        "template_ub4wrsh",
        form.current,
        "-JNChDyu3PbdQ2AWg"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out out the form below below to discuss work opportunites
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links"><a href="https://instagram.com/suriya_._narayanan?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
            <img src={insta} alt="Instagram" className="Link" /></a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
