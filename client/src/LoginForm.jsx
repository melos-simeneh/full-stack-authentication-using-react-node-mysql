import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};
  return (
    <Form className="px-4 py-2 pb-4" onSubmit={handleSubmit(onSubmit)}>
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
