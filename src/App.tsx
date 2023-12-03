import Home from "./pages/Home";
import Layout from "./Layout";
import { NavProvider } from "./hooks/useNav";

const App = (): JSX.Element => {
  return (
    <NavProvider>
      <Layout>
        <Home />
      </Layout>
    </NavProvider>
  );
};

export default App;
