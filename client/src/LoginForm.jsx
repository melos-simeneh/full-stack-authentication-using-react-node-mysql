import axios from "axios";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function LoginForm() {
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/api/login", data)
      .then((response) => {
        alert(JSON.stringify(response.data));
        setError();
      })
      .catch((error) => {
        const status = error.response.status;
        if (status === 404) setError("Invalid username or password");
        else setError("Server error: server is not responding");
      });
  };

  return (
    <Form className="px-4 py-2 pb-4" onSubmit={handleSubmit(onSubmit)}>
      {error && <Alert variant={"danger"}>{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Username"
          {...register("username", {
            required: true,
          })}
        />
        {errors?.username?.type === "required" && (
          <span className="text-danger">Username is required</span>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        />
        {errors?.password?.type === "required" && (
          <span className="text-danger">Password is required</span>
        )}
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="secondary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
