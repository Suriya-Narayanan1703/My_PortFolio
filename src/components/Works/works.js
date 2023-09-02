import React from "react";
import zomato from "../../assets/zoma.png";
import food from "../../assets/zom.png";
import sea from "../../assets/searchen.png";
import "./works.css";

/*
Voice assist
Search engine
Food Delivery System
Zomato Data Analysis
Web Scarping
Voting System using solidity
 */
const works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        I take a moment to present my projects I did in my interested domain and
        from my curriculum.
      </span>
      <div className="worksFull">
        <div className="worksDet">
          <img src={zomato} className="workimage" />
          <div className="worksdescp">
            <h2>Zomato Data Analysis</h2>
          </div>
        </div>
        <div className="worksDet">
          <img src={food} className="workimage" />
          <div className="skillBarText">
            <h2>Food Delivery Web Application</h2>
          </div>
        </div>
        <div className="worksDet">
          <img src={sea} className="workimage" />
          <div className="skillBarText">
            <h2>Search Engine</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default works;
