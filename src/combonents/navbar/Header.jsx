import React from "react";
import "./navbar.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function Header() {
  return (
    <div>
      {" "}
      <div style={{ backgroundColor: "#001233" }}>
        <Row>
          <Col style={{ backgroundColor: "#001233" }}>
            <Navbar
              expand="lg"
              className=" justify-content-between " id="headNav"
             
              
            >
              <h2 href="#home" className="headeName">
                Port<span style={{color:"white"}}>folio</span>
              </h2>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="ml-auto"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <ul className="navbar-nav custom-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active text-white "
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  " href="#smooth">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#service">
                        Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        Portfoliio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
