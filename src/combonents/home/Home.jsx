import React from "react";
import "./style.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#001233" }}>
        <div className="hero-section">
          <div className="heroName">
            <h1>
              <span className="name-span">HI, I'M</span> Ashil Thomas
            </h1>
            <h2>
              <span>Fullstack</span> Webdeveloper
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              ipsum dolor sit, amet consectetur adipisicing elit Earum
              voluptatibus nulla{" "}
            </p>
            <button className="clikButton danger">Hire me</button>
          </div>
          <div className="hero-image">
            <img
              src={
                "https://preview.colorlib.com/theme/satner/img/banner/home-right.png"
              }
              alt="Description of the image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
