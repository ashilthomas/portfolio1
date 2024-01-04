import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="about-section" id="smooth">
        <div className="about-image ">
          <img
            src={
              "https://thewritelife.com/wp-content/uploads/2019/07/portfolio-websites.jpg"
            }
            alt="Description of the image"
          />
        </div>
        <div className="about-text ">
          <h2>About me</h2>
          <h5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet{" "}
          </h5>
          <div className="line-red"></div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a,
            recusandae sint saepe earum, non eius molestias, obcaecati corrupti
            debitis nulla dignissimos vero nihil excepturi accusamus et. Iure,
            veniam obcaecati! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Eveniet a, recusandae sint saepe earum, non eius
            molestias, obcaecati corrupti debitis nulla dignissimos vero nihil
            excepturi accusamus et. Iure, veniam obcaecati!
          </p>
          <button className="down-btn">DownLode CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;
