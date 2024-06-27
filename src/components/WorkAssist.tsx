"use client";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const WorkAssist = () => {
  const projects = [
    {
      title: "Sarah Bamidele",
      description: `MBA`,
      imgUrl: "/founder.jpeg",
    },
    // {
    //   title: "OUSSAMA LOUATI",
    //   description: "Software Engineer",
    //   imgUrl: "https://i.postimg.cc/xCRJGMjz/OUSSAMA-LOUATI.jpg",
    // },
    // {
    //   title: "Houda el ibrahimi",
    //   description: "Software Engineer",
    //   imgUrl: "https://i.postimg.cc/zvhmZSLL/justme-1.jpg",
    // },
  ];

  return (
    <section
      className="project"
      style={{
        background:
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      }}
      id="workassist"
    >
      <Container>
        <Row>
          <Col sm={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>What Contract Assist is ?</h2>
                  <p>
                    Founded in 2022, <b>Contract Assist</b> bridges the
                    knowledge gap between business teams and lawyers. Our MVP
                    empowers non-legal users to conduct initial contract
                    reviews, reducing the need for legal involvement and
                    streamlining the review process.
                    <br /> <b>Contract Assist </b> is a platform that utilizes
                    AI and automation to simplify and streamline the contract
                    reviewing process for commercial teams, allowing them to
                    conduct initial reviews of straightforward contracts without
                    requiring legal expertise.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row></Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <div className="proj-imgbx">
                        <img src="https://i.postimg.cc/MKLWyhdb/IMG-20230422-075421.jpg" alt="Project Image" />
                        <div className="proj-txtx">
                          <h4>Oussama Louati</h4>
                          <span>software Engineer</span>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src="https://i.postimg.cc/Gp5qSPks/Untitled-design-3.png" alt=""></img> */}
    </section>
  );
};
