import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";

const Notes = (props) => {
  const { id, owner, title, content, updated_at } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useNavigate();

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const handleShow = () => {
    setShow(true);
    setMessage(`Are you sure you want to delete ${title}?`);
    setType("note");
  };
  const handleClose = () => setShow(false);

  const handleEdit = () => {
    history.push(`/notes/${id}/edit`);
  };

  const handleNoteDelete = async () => {
    try {
      await axiosRes.delete(`/notes/${id}/`);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {is_owner && (
        <Card className={styles.Post}>
          <Card.Body>
            <Image className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span>{updated_at}</span>
                <MoreDropdown handleEdit={handleEdit} handleShow={handleShow} />
              </div>
            </Image>
          </Card.Body>

          <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
            {content && <Card.Text>{content}</Card.Text>}
          </Card.Body>
        </Card>
      )}
      <ConfirmDeleteModal
        showModal={show}
        handleClose={handleClose}
        handleNoteDelete={handleNoteDelete}
        type={type}
        message={message}
      />
    </>
  );
};

export default Notes;