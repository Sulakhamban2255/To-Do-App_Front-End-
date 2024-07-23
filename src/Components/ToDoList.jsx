

import React, { useEffect, useState } from "react";
import {
  ListGroup,
  Button,
  Container,
  Badge,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { completeToDo, deleteToDo, getToDo } from "../Services/AllApi";
import { toast } from "react-toastify";

function TodoList() {
  const [todoView, setTodoView] = useState([]);
  const [completedView, setCompletedView] = useState([]);

  useEffect(() => {
    toDoList();
  }, []);

  const toDoList = async () => {
    const result = await getToDo();
    setTodoView(result.data.filter((todo) => !todo.completed));
    setCompletedView(result.data.filter((todo) => todo.completed));
  };

  const toDoDel = async (id) => {
    const result = await deleteToDo(id);
    if (result.status === 200) {
      toast.success("To do deleted successfully");
    } else {
      toast.error("Unable to delete");
    }
    toDoList();
  };

  const toDoComplete = async (id) => {
    const result = await completeToDo(id);
    if (result.status === 200) {
      toast.success("To do marked as completed");
    } else {
      toast.error("Unable to mark as completed");
    }
    toDoList();
  };

  return (
    <Container
      className="my-4 w-75 p-4 border rounded shadow-lg"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <h1 className="text-center mb-4" style={{color:"blue"}}> To-Do List</h1>
      <Row>
        <Col>
          <h2 style={{color:"blue"}}>Tasks</h2>
          <ListGroup>
            {todoView.length > 0 ? (
              todoView.map((todo, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center mb-3 p-3"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Card className="w-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between align-items-center">
                        {todo.Title}
                        <Badge bg="info">To Do</Badge>
                      </Card.Title>
                      <Card.Text>{todo.Description}</Card.Text>
                      <div className="d-flex justify-content-end">
                        <Button
                          onClick={() => toDoComplete(todo.id)}
                          variant="success"
                          className="me-2"
                        >
                          Complete
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => toDoDel(todo.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))
            ) : (
              <p>No todos available</p>
            )}
          </ListGroup>
        </Col>
        <Col>
          <h2 style={{color:"blue"}}>Completed Tasks</h2>
          <ListGroup>
            {completedView.length > 0 ? (
              completedView.map((todo) => (
                <ListGroup.Item
                  key={todo.id}
                  className="d-flex justify-content-between align-items-center mb-3 p-3"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Card className="w-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between align-items-center">
                        {todo.Title}
                        <Badge bg="success">Completed</Badge>
                      </Card.Title>
                      <Card.Text>{todo.Description}</Card.Text>
                      <div className="d-flex justify-content-end">
                        <Button
                          variant="danger"
                          onClick={() => toDoDel(todo.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))
            ) : (
              <p>No completed tasks available</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
