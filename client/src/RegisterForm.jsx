import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};
  return (
    <Form className="px-4 py-2 pb-4" onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Control
            placeholder="First Name"
            {...register("first_name", {
              required: true,
            })}
          />
          {errors?.first_name?.type === "required" && (
            <span className="text-danger">* required</span>
          )}
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="password"
            placeholder="Last Name"
            {...register("last_name", {
              required: true,
            })}
          />
          {errors?.last_name?.type === "required" && (
            <span className="text-danger">* required</span>
          )}
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Username"
          {...register("username", {
            required: true,
          })}
        />
        {errors?.username?.type === "required" && (
          <span className="text-danger">* required</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        />
        {errors?.password?.type === "required" && (
          <span className="text-danger">* required</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Confirm Passsword"
          {...register("confirm", {
            required: true,
          })}
        />
        {errors?.confirm?.type === "required" && (
          <span className="text-danger">* required</span>
        )}
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Register
        </Button>
      </div>
    </Form>
  );
}

export default RegisterForm;
