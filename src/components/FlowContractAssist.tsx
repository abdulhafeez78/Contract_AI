"use client";
import { useState } from "react";
import { NavBar } from "./navbar";
import axios from "axios";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FlowContractAssist: React.FC = () => {
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img className="logo-css" src="/new_logo.png" alt="Logo" width={250} />
        <Nav className="ms-auto">
          <Nav.Link
            href="/"
            className={" navbar-link"}
            style={{ color: "white", fontSize: "25px", marginRight: 20 }}
          >
            Home
          </Nav.Link>
        </Nav>
      </div>
      <div className="dashboard">
        <h1 style={{ marginTop: 20 }}>
          Flow of <span style={{ color: "purple" }}>Contract Assist</span>
        </h1>
        <div className="image-container" style={{ marginTop: 20 }}>
          <img src="/assets/video/demo_flow.png" alt="demo-flow" />
        </div>
      </div>

      {/* <div className="ccode highcontrast-dark" id="explanation"></div>
        <div className="ccode highcontrast-dark" id="analysis"></div> */}
    </>
  );
};

export default FlowContractAssist;
