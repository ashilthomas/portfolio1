import React from "react";
import "./service.css";
function Service() {
  return (
    <div>
      <div className="service-main">
        <div className="service-name">
          <h1>MY Services</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut at
            magnam ut quo est ipsum eos recusandae iste facilis et, blanditiis
            doloribus accusamus id placeat, repellat incidunt corrupti illo
            temporibus?{" "}
          </p>
        </div>
        <div className="service-section" id="service">
          <div className="service-card">
           
            <h2>Webdiesign</h2>
            <p>
              Lorem ipsum dolor sit am consectetur adipisicing elit. Magnam,
              nulla voluptatem rem perferendis natus quo neque officia, quas,
              molestiae{" "}
            </p>
          </div>
          <div class="service-card">
          
            <h2>UI UX</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              nulla voluptatem rem perferendis natus quo neque officia, quas,
              molestiae{" "}
            </p>
          </div>
          <div className="service-card">
        
            <h2>BackEnd</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              nulla voluptatem rem perferendis natus quo neque officia, quas,
              molestiae
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
