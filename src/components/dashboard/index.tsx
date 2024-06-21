"use client";
import { useEffect, useState } from "react";
import { NavBar } from "../navbar";
import axios from "axios";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FileUpload: React.FC = () => {
  const [selectedResponse, setSelectedResponse] = useState<string>("");
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [file, setFile] = useState("");
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setShow(true);
    setIndex(0);
    setFile("");
    setScore1(0);
    setScore2(0);
    setScore3(0);
    setFinalScore(null);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const questionsArray = [
    "Is the confidential information being used exclusively for its authorised purpose?",
    "Is the transaction conducted with the explicit consent of the disclosing party, in alignment with GDPR regulations?",
    "Is the confidential information disclosed solely to parties bound by contractual obligations to maintain its confidentiality?",
  ];

  const buttonArray = ["With Consent", "With Consent", "Partially"];

  const calculateFinalScore = () => {
    const totalScore = (score1 + score2 + score3) / 3;
    setFinalScore(totalScore);
    setShowModal(true);
  };

  const getScoreMessage = () => {
    if (finalScore === null) return "";
    if (finalScore === 0)
      return " Overall Risk: Low - Fully compliant with the agreement.";
    if (finalScore > 0 && finalScore <= 1)
      return " Overall Risk: Moderate - Some conditions require closer attention.";
    if (finalScore > 1 && finalScore <= 2)
      return " Overall Risk: High - Immediate action required for compliance.";
    return "Bad"; // Default message for any other cases
  };

  const getModalColor = () => {
    if (finalScore === null) return "";
    if (finalScore === 0) return "green";
    if (finalScore > 0 && finalScore <= 1) return "orange";
    if (finalScore > 1 && finalScore <= 2) return "red";
    return ""; // Default color for any other cases
  };

  console.log(finalScore);

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
        {show == true ? (
          <>
            <form encType="multipart/form-data">
              <div
                className="drop-container"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 100,
                  background: "white",
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={(event: any) => {
                  setFile(event.dataTransfer.files[0]);
                  setIndex(0);
                }}
              >
                <span className="drop-title">
                  To analyze your document, drop your file here
                </span>
                or
                <input
                  type="file"
                  className="file-upload"
                  name="file"
                  required
                  onChange={(event: any) => {
                    setFile(event.target.files[0]);
                    setIndex(0);
                  }}
                />
              </div>
            </form>
            <div
              className="code-container"
              style={{ marginTop: 50, marginBottom: "50px" }}
            >
              <section className="augs bg" data-augmented-ui>
                <div className="code highcontrast-dark">
                  <div id="response" className="code-textarea">
                    {file && (
                      <>
                        <h1
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "22px",
                          }}
                        >
                          Contract Type : Non-Disclosure Agreement
                        </h1>

                        <h1
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "22px",
                            marginTop: 20,
                          }}
                        >
                          Non-Disclosure Agreement between TotalFit and Maison
                          Ltd
                        </h1>

                        <h1
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "22px",
                            marginTop: 30,
                          }}
                        >
                          Click {"'"}Start{"'"} to begin.
                        </h1>
                        <center>
                          <button
                            className="custom-btn btn-9"
                            style={{ marginTop: 20 }}
                            onClick={() => {
                              setShow(false);
                            }}
                          >
                            <span>Start</span>
                          </button>
                        </center>
                      </>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : (
          <>
            <form encType="multipart/form-data"></form>
            <div
              className="code-container"
              style={{ marginTop: 50, marginBottom: "50px" }}
            >
              <section
                className={finalScore == null ? "augs bg" : ""}
                style={
                  finalScore != null
                    ? { color: "red", width: "50%", height: "50vh" }
                    : {}
                }
                data-augmented-ui
              >
                <div className="code highcontrast-dark">
                  <div id="response" className="code-textarea">
                    {file && (
                      <>
                        {index < 3 && (
                          <h1
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            {questionsArray[index]}
                          </h1>
                        )}
                        {index < 3 && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "50px",
                            }}
                          >
                            <button
                              className="custom-btn btn-9"
                              onClick={(e: any) => {
                                e.preventDefault();
                                if (index < 3) {
                                  if (index === 0)
                                    setScore1((prev) => prev + 0);
                                  else if (index === 1)
                                    setScore2((prev) => prev + 0);
                                  else setScore3((prev) => prev + 0);
                                  setIndex(index + 1);
                                }
                                if (index === 2) calculateFinalScore();
                              }}
                            >
                              Yes
                            </button>

                            <button
                              className="custom-btn btn-9"
                              onClick={(e: any) => {
                                e.preventDefault();
                                if (index < 3) {
                                  if (index === 0)
                                    setScore1((prev) => prev + 1);
                                  else if (index === 1)
                                    setScore2((prev) => prev + 1);
                                  else setScore3((prev) => prev + 1);
                                  setIndex(index + 1);
                                }
                                if (index === 2) calculateFinalScore();
                              }}
                            >
                              No
                            </button>

                            <button
                              className="custom-btn btn-9"
                              onClick={(e: any) => {
                                e.preventDefault();
                                if (index < 3) {
                                  if (index === 0)
                                    setScore1((prev) => prev + 2);
                                  else if (index === 1)
                                    setScore2((prev) => prev + 2);
                                  else setScore3((prev) => prev + 2);
                                  setIndex(index + 1);
                                }
                                if (index === 2) calculateFinalScore();
                              }}
                            >
                              {buttonArray[index]}
                            </button>
                          </div>
                        )}
                        {index === 3 && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: "20px",
                              flexDirection: "column",
                            }}
                          >
                            <Modal
                              show={showModal}
                              onHide={handleCloseModal}
                              centered
                            >
                              <Modal.Header
                                closeButton
                                style={{ backgroundColor: getModalColor() }}
                              >
                                <Modal.Title>Result</Modal.Title>
                              </Modal.Header>
                              <Modal.Body
                                style={{ backgroundColor: getModalColor() }}
                              >
                                <h4>{getScoreMessage()}</h4>
                              </Modal.Body>
                              <Modal.Footer
                                style={{ backgroundColor: getModalColor() }}
                              >
                                <Button
                                  variant="secondary"
                                  onClick={handleCloseModal}
                                >
                                  Close
                                </Button>
                              </Modal.Footer>
                            </Modal>

                            {/* <h1
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "22px",
                              }}
                            >
                              Contract Type : Non-Disclosure Agreement
                            </h1>
                            <h2
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: 50,
                              }}
                            >
                              {getScoreMessage()}
                            </h2> */}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </>
        )}

        <div className="ccode highcontrast-dark" id="explanation"></div>
        <div className="ccode highcontrast-dark" id="analysis"></div>
      </div>
    </>
  );
};

export default FileUpload;
