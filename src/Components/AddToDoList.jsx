import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  FloatingLabel,
} from "react-bootstrap";
import { addToDo } from "../Services/AllApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddTodo() {
  const [todo, setTodo] = useState({
    Title: "",
    Description: "",
  });

  const navigate = useNavigate();

  const AddTodo = async () => {
    const { Title, Description } = todo;
    if (!Title || !Description) {
      toast.error("Please enter the valid inputs ");
    } else {
      const result = await addToDo(todo);
      setTodo(result.data);
      console.log(result);
      navigate("/todo");
      toast.success("todo Added successfully ");
    }
  };

  return (
    <Container className="my-4">
      <Form className="p-4 shadow-sm rounded bg-light">
        <Row className="align-items-center">
          <Col md={5} className="mb-3 mb-md-0">
            <FloatingLabel
              controlId="floatingTitle"
              label="Title"
              onChange={(e) => {
                setTodo({ ...todo, Title: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="Title" />
            </FloatingLabel>
          </Col>
          <Col md={5} className="mb-3 mb-md-0">
            <FloatingLabel
              controlId="floatingDescription"
              label="Description"
              onChange={(e) => {
                setTodo({ ...todo, Description: e.target.value });
              }}
            >
              <Form.Control type="text" placeholder="Description" />
            </FloatingLabel>
          </Col>
          <Col md={2}>
            <Button
              variant="primary"
              type="button"
              className="w-100 mb-3"
              style={{ height: "55px" }}
              onClick={AddTodo}
            >
              Add To-Do
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default AddTodo;
