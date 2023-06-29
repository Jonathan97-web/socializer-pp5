import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const AlertMessages = (props) => {
  const { showAlert, setShowAlert, variant, alertMessages } = props;

  return (
    showAlert && (
      <Container className="my-3">
        <Alert
          variant={variant}
          onClose={() => setShowAlert(false)}
          className="fade"
          dismissible
        >
          <p> {alertMessages} </p>
        </Alert>
      </Container>
    )
  );
};

export default AlertMessages;
