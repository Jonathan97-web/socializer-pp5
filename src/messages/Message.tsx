import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import MessageReplyForm from "./MessageReplyForm";
import AlertMessages from "../components/AlertMessages";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Button.module.css";
import { CardBody, Card } from "react-bootstrap/esm";

const Message = ({ ...props }) => {
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
      <Card>
        <Link to={`/profiles/${profile_id}/`}>
          <Avatar src={profile_image} height={45} text="" />
        </Link>
        <CardBody>
          <span>
            <strong>
              {owner}, {created_at}
            </strong>{" "}
          </span>
          <p>{message}</p>
        </CardBody>
        <Button className={`${btnStyles.Reply} btn-sm`} onClick={handleShow}>
          Reply
        </Button>
      </Card>
      <AlertMessages
        showAlert={showAlert}
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
