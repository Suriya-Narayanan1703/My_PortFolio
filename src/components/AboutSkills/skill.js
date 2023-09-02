import React from "react";
import "./skill.css";
import analysis from "../../assets/analysis.png";
import machine from "../../assets/ml-1.png";
import web from "../../assets/Web.png";

const skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am data analytics ethuciast and a Machine Learning Practitioner. I
        have been working under these two domains from the start of my computer
        science career and amid I learned other domains such as web development
        and web designing. I was in few internship program where I enchanced my
        domain skills.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={analysis} alt="analysis" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Data Analyst</h2>
            <p>
              As a Data Analyst Trainee, I embark on a journey to unravel
              insights from data, bridging the gap between raw information and
              valuable decision-making.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={machine} alt="machine" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Machine Learning</h2>
            <p>
              As Machine Learning Trainee, I delve into the realm of artificial
              intelligence, learning to create algorithms that enable computers
              to improve and make predictions based on data.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={web} alt="web" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>
              As Web Developer Trainee, I embrace the world of coding and
              design, honing skills to craft engaging and functional websites
              that shape the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skill;
