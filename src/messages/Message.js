import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../components/Avatar";
import MessageReplyForm from "./MessageReplyForm";
import AlertMessages from "../components/AlertMessages";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Button.module.css";

const Message = (props) => {
  const { profile_id, profile_image, created_at, message, owner } = props;

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const [showAlert, setShowAlert] = useState(false);
  const [variant, setVariant] = useState("");
  const [alertMessages, setAlertMessages] = useState("");

  const handleAlert = () => {
    setShowAlert(true);
    setVariant("success");
    setAlertMessages("Your reply has been sent successfully");
  };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} height={45} />
        </Link>
        <Media.Body>
          <span>
            <strong>
              {owner}, {created_at}
            </strong>{" "}
          </span>
          <p>{message}</p>
        </Media.Body>
        <Button className={`${btnStyles.Reply} btn-sm`} onClick={handleShow}>
          Reply
        </Button>
      </Media>
      <AlertMessages
        showAlert={showAlert}
        setShowAlert
        variant={variant}
        alertMessages={alertMessages}
      />
      <MessageReplyForm
        profile_id={profile_id}
        owner={owner}
        showModal={show}
        handleClose={handleClose}
        handleAlert={handleAlert}
      />
    </div>
  );
};

export default Message;
