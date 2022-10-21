import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import RouterConfig from "./navigation/RouterConfig";
import { ToastContainer } from "react-toastify";
type Props = {};

const App: React.FC<Props> = () => {
  const queryClient = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Router>
          <RouterConfig />
        </Router>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
