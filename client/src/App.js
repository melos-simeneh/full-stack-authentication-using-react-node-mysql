import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <div
      className="d-flex flex-grow-1 justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Container>
        <Row className="border border-secondary-subtle rounded">
          <Col xs={6} className="backgroundImage"></Col>
          <Col xs={6} className="p-0">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
