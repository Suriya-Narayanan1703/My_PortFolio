import React from "react";
import "./intro.css";
import bg from "../../assets/profile-1.png";
import hire from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="IntoText">
          I'm <span className="IntroName">Suriya Narayanan S</span>
          <br />
          Data Analyst | Web Developer | Machine Learning Practitioner
        </span>
        <p className="IntroPara">
          Learning machine Learning, Data Science and Web development domain
          with a passion for developing intermediate and advanced projects.
        </p>
        <p className="IntroPara">
          I have successfully completed my domain courses in popular platforms
          such as Udemy.
        </p>
        <p className="IntroPara">
          I thrive in dynamic and fast-paced environments, where I can apply my
          domain knowledge.
        </p>
        <Link>
          <button className="btn">
            <img src={hire} alt="" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
