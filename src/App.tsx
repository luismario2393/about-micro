import { Helmet } from "react-helmet-async";
import HelmetProvider from "@core/contexts/HelmetContext";

function App(props: any) {
  return (
    <>
      <HelmetProvider>{props.children}</HelmetProvider>
    </>
  );
}

export default App;
