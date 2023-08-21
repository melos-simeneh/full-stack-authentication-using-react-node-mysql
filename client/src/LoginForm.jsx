import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
function LoginForm() {
  return (
    <Form className="text-center px-4 py-2 pb-4">
      <Form.Group className="mb-3">
        <Form.Control placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary">Login</Button>
      </div>
    </Form>
  );
}

export default LoginForm;
