import { Fragment } from "react";
import Home from "./pages/Home";
import Layout from "./Layout";

const App = (): JSX.Element => {
  return (
    <Layout>
        <Home />
    </Layout>
  );
};

export default App;
