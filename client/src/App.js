import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import FormBox from "./FormBox";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FormBox />
    </QueryClientProvider>
  );
}

export default App;
