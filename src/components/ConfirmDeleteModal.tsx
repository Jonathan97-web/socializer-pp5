import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import btnStyles from "../styles/Button.module.css";

const ConfirmDeleteModal = (props: any) => {
  const {
    showModal,
    handleClose,
    handleCommentDelete,
    handlePostDelete,
    handleNoteDelete,
    type,
    message,
  } = props;

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        {/* Delete Modal for deleting a comment */}
        {type === "comment" && (
          <>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Modal}`}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Delete}`}
              onClick={handleCommentDelete}
            >
              Confirm Deletion
            </Button>
          </>
        )}
        {/* Delete Modal for deleting a post */}
        {type === "post" && (
          <>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Modal}`}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Delete}`}
              onClick={handlePostDelete}
            >
              Confirm Deletion
            </Button>
          </>
        )}

        {/* Delete Modal for deleting a note */}
        {type === "note" && (
          <>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Modal}`}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Delete}`}
              onClick={handleNoteDelete}
            >
              Confirm Deletion
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDeleteModal;
