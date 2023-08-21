import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div
      className="bg-dark d-flex flex-grow-1 justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Container>
        <Row className="border border-primary rounded">
          <Col xs={6} className="backgroundImage"></Col>
          <Col xs={6}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
