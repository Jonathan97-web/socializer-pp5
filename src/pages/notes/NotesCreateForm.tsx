import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

interface Errors {
  title?: string[];
  content?: string[];
  non_field_errors?: string[];
}

const NotesCreateForm = () => {
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
  });
  const { title, content } = noteData;

  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setNoteData({
      ...noteData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/notes/", noteData);
      navigate("/");
    } catch (err: any) {
      setErrors(err.response?.data);
      console.log(noteData);
      console.log(err.response);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto mx-auto" md={8}>
        <Container className={`${appStyles.Content} p-5 `}>
          <h1 className={styles.Header}>Notes</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label className="d-none">Title</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.title?.map((message: any, idx: any) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="content">
              <Form.Label className="d-none">Content</Form.Label>
              <Form.Control
                className={styles.Input}
                type="content"
                placeholder="Content"
                name="content"
                value={content}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.content?.map((message: any, idx: any) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Create
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default NotesCreateForm;
