import React from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const AlertMessages = (props: any) => {
  const { showAlert, variant, alertMessages } = props;

  return (
    showAlert && (
      <Container className="my-3">
        <Alert variant={variant} dismissible>
          <p> {alertMessages} </p>
        </Alert>
      </Container>
    )
  );
};

export default AlertMessages;
