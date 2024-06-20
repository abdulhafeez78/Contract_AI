"use client";
import { useEffect, useState } from "react";
import { NavBar } from "../navbar";
import axios from "axios";

const FileUpload: React.FC = () => {
  const [selectedResponse, setSelectedResponse] = useState<string>("");
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [file, setFile] = useState("");
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [finalScore, setFinalScore] = useState<number | null>(null);

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
  };

  const getScoreMessage = () => {
    if (finalScore === null) return "";
    if (finalScore === 0)
      return "🚦🟢 Overall Risk: Low - Fully compliant with the agreement.";
    if (finalScore > 0 && finalScore <= 1)
      return "🚦🟠 Overall Risk: Moderate - Some conditions require closer attention.";
    if (finalScore > 1 && finalScore <= 2)
      return "🚦🔴 Overall Risk: High - Immediate action required for compliance.";
    return "Bad"; // Default message for any other cases
  };

  console.log(finalScore);

  return (
    <>
      <div className="titre">
        <div className="first-word">Contract Q&A:</div>
        <div className="complete-phrase">
          {/* <span>Unlocking Answers to Vital Questions</span> */}
        </div>
      </div>
      <div className="dashboard">
        <form encType="multipart/form-data">
          <div
            className="drop-container"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(event: any) => {
              setFile(event.dataTransfer.files[0]);
              setIndex(0);
              setShow(false);
            }}
          >
            <span className="drop-title">Drop files here</span>
            or
            <input
              type="file"
              className="file-upload"
              name="file"
              required
              onChange={(event: any) => {
                setFile(event.target.files[0]);
                setIndex(0);
                setShow(false);
              }}
            />
          </div>
          <input
            className="custom-btn btn-8"
            type="submit"
            value="Generate Questions"
            onClick={(e: any) => {
              e.preventDefault();
              if (file) {
                setShow(true);
                setIndex(0);
                setFinalScore(0);
                setScore1(0);
                setScore2(0);
                setScore3(0);
              }
            }}
          />
        </form>
        <div className="code-container" style={{ marginBottom: "50px" }}>
          <section className="augs bg" data-augmented-ui>
            <div className="code highcontrast-dark">
              <div id="response" className="code-textarea">
                {file && show && (
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
                    {index < 3 && (
                      <h1 style={{ marginTop: "20px" }}>
                        {questionsArray[index]}
                      </h1>
                    )}
                    {index < 3 && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "20px",
                        }}
                      >
                        <input
                          className="custom-btn btn-8"
                          type="button"
                          value="Yes"
                          onClick={(e: any) => {
                            e.preventDefault();
                            if (index < 3) {
                              if (index === 0) setScore1((prev) => prev + 0);
                              else if (index === 1)
                                setScore2((prev) => prev + 0);
                              else setScore3((prev) => prev + 0);
                              setIndex(index + 1);
                            }
                            if (index === 2) calculateFinalScore();
                          }}
                        />

                        <input
                          className="custom-btn btn-8"
                          type="button"
                          value="No"
                          onClick={(e: any) => {
                            e.preventDefault();
                            if (index < 3) {
                              if (index === 0) setScore1((prev) => prev + 1);
                              else if (index === 1)
                                setScore2((prev) => prev + 1);
                              else setScore3((prev) => prev + 1);
                              setIndex(index + 1);
                            }
                            if (index === 2) calculateFinalScore();
                          }}
                        />

                        <input
                          className="custom-btn btn-8"
                          type="button"
                          value={buttonArray[index]}
                          onClick={(e: any) => {
                            e.preventDefault();
                            if (index < 3) {
                              if (index === 0) setScore1((prev) => prev + 2);
                              else if (index === 1)
                                setScore2((prev) => prev + 2);
                              else setScore3((prev) => prev + 2);
                              setIndex(index + 1);
                            }
                            if (index === 2) calculateFinalScore();
                          }}
                        />
                      </div>
                    )}
                    {index === 3 && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "20px",
                        }}
                      >
                        <h2>{getScoreMessage()}</h2>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        </div>

        <div className="ccode highcontrast-dark" id="explanation"></div>
        <div className="ccode highcontrast-dark" id="analysis"></div>
      </div>
    </>
  );
};

export default FileUpload;
