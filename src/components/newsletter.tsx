import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

interface NewsletterProps {
  status: string;
  message: string;
  onValidated: (formData: { EMAIL: string }) => void;
}

export const Newsletter = ({
  status,
  message,
  onValidated,
}: NewsletterProps) => {
  const [email, setEmail] = useState("");

  const [btnText, setBtnText] = useState("Submit");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // email &&
    //   email.indexOf("@") > -1 &&
    //   onValidated({
    //     EMAIL: email,
    //   });
    setBtnText("Submit...");

    setTimeout(() => {
      setBtnText("Submit");
    }, 2000);
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Join the waiting list
              <br />
              <br />
              Do not miss out on the official launch of Contract Assist
              {/* Subscribe to our Newsletter<br></br> & Never miss latest updates */}
            </h3>
            {status === "sending" && (
              <Alert>
                You will get Notifications and updates in your inbox
              </Alert>
            )}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address to join the waiting list"
                />
                <button type="submit">{btnText}</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
