import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const FormContainer = () => {
  return (
    <div
      className="d-flex flex-grow-1 justify-content-center align-items-center backgroundImage"
      style={{ height: "100vh" }}
    >
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
