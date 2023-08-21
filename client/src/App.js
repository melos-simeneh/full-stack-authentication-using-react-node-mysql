import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import FormBox from "./FormBox";
const queryClient = new QueryClient();
function App() {
  return <FormBox />;
}

export default App;
