import React from "react";
import medide from "../../assets/design.png";
import cb from "../../assets/datascience.png";
import webs from "../../assets/webintern.png";
import "./exp.css";

const exp = () => {
  return (
    <section id="Experience">
      <h2 className="worksTitle">Experience</h2>
      <span className="worksDesc">
        I have been as Data Science intern in a Start up called Connecting
        Blood, Web Developer intern in webstack, Design intern in Medide and
        completed an externship in Smart Internz.
      </span>
      <div className="worksFull">
        <div className="worksDet">
          <img src={cb} className="workimage" />
          <div className="worksdescp">
            <h2>Data Science Internship at Connecting Blood</h2>
          </div>
        </div>
        <div className="worksDet">
          <img src={webs} className="workimage" />
          <div className="skillBarText">
            <h2>Web Developer Intern in Web Stack</h2>
          </div>
        </div>
        <div className="worksDet">
          <img src={medide} className="workimage" />
          <div className="skillBarText">
            <h2>Design Intern in Medide</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default exp;
