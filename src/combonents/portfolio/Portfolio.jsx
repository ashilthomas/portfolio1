import React from "react";
import "./portfolio.css";

function Portfolio() {
  return (
    <div>
      <div id="portfolio">
        <div className="port-container">
          <h2>My Work</h2>
          <div className="portfolio-items">
            <div class="portfolio-item">
              <img
                src={
                  "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                alt="Description of the image"
              />

              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              </p>
            </div>
            <div className="portfolio-item">
              <img
                src={
                  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                alt="Project 2"
              />

              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              </p>
            </div>
            <div className="portfolio-item">
              <img
                src={
                  "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="Project 2"
              />
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
