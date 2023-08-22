import React from "react";
import { Alert, Container, Tab, Tabs } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const FormContainer = () => {
  return (
    <div
      className="d-flex flex-column flex-grow-1 justify-content-center align-items-center backgroundImage"
      style={{ height: "100vh" }}
    >
      <Alert variant={"primary"} className="w-50 text-center py-1">
        <h2>React Authentication App</h2>
      </Alert>
      <Container className="border border-secondary-subtle rounded p-0 w-50 bg-white">
        <Tabs
          defaultActiveKey="login"
          className="mb-3 nav-justified bg-light fw-bold rounded"
        >
          <Tab eventKey="login" title="Signin">
            <LoginForm />
          </Tab>
          <Tab eventKey="register" title="Signup">
            <RegisterForm />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default FormContainer;
