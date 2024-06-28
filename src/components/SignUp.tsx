"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { redirect, useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface FormDetails {
  email: string;
  password: string;
}

export const SignUp = ({ setAccess }: any) => {
  const router = useRouter();

  const formInitialDetails: FormDetails = {
    email: "",
    password: "",
  };
  const [formDetails, setFormDetails] =
    useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState("Sign in");
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>(
    {}
  );
  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const grantAccess = "ContractAssist2024";
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    // This will prevent page refresh
    e.preventDefault();
    // setButtonText("Sign in ...");
    if (formDetails.password == grantAccess) {
      setAccess(true);
      localStorage.setItem("access", JSON.stringify("yes"));
      Swal.fire("Sign in successfully");

      window.location.href = "/";
    } else {
      Swal.fire("Invalid credentials");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  //   src="https://i.postimg.cc/yxq273Ck/Untitled-design-4.png"7
                  src="/login.png"
                  alt="signin"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Sign In</h2>
                  <form onSubmit={submit}>
                    <Row>
                      <Col xs={12} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          required
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col xs={12} className="px-1">
                        <input
                          type="text"
                          value={formDetails.password}
                          placeholder="Password"
                          onChange={(e) =>
                            onFormUpdate("password", e.target.value)
                          }
                        />
                      </Col>
                      <Col xs={12} className="px-1">
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {/* {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )} */}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
