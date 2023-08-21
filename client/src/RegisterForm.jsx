import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function RegisterForm() {
  return (
    <Form className="px-4 py-2 pb-4">
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Control placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control type="password" placeholder="Last Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Control placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control placeholder="Confirm Passsword" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary">Register</Button>
      </div>
    </Form>
  );
}

export default RegisterForm;
