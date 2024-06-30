"use client";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: any) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img className="logo-css" src="/new_logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#features"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#workassist"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Contract Assist
            </Nav.Link>
            <Nav.Link
              href="#dev"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/flow"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Blueprint
            </Nav.Link>
          </Nav>
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            <span className="navbar-text">
              <button className="vvd">
                <span>Start Your Demo</span>
              </button>
            </span>
          </Link>
          <Nav>
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={logout}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
