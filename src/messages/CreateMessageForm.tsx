import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import { axiosRes } from "../api/axiosDefaults";
import AlertMessages from "../components/AlertMessages";

interface Errors {
  message?: string[];
}
const CreateMessageForm = (props: any) => {
  const { sendToProfile, profileId, mobile } = props;

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const [variant, setVariant] = useState("");
  const [alertMessages, setAlertMessages] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("profile", profileId);
    formData.append("message", message);

    try {
      await axiosRes.post("/chat/", formData);
      setMessage("");
      setShowAlert(true);
      setVariant("success");
      setAlertMessages("Your message has been sent successfully");
    } catch (err: any) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container
      className={`${appStyles.Content} mb-3 text-center ${
        mobile && "d-lg-none"
      }`}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Send a Message to {sendToProfile}</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Type your message here"
            name="message"
            value={message}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.message?.map((message: any, idx: any) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Button
          className={`${btnStyles.Button} ${btnStyles.Form}`}
          type="submit"
        >
          Send
        </Button>
      </Form>
      <AlertMessages
        showAlert={showAlert}
        setShowAlert
        variant={variant}
        alertMessages={alertMessages}
      />
    </Container>
  );
};

export default CreateMessageForm;
