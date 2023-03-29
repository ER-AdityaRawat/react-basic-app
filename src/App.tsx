import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "./App.css";
import Layout from "./layouts";
import Todo from "./pages/Todo";
import Parentform from "./pages/ParentForm";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
