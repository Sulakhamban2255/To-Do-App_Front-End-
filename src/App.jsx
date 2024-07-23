import { Container } from "react-bootstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import AddToDoList from "./Components/AddToDoList";
import Header from "./Components/Header";
import TodoList from "./Components/ToDoList";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AddToDoList />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
