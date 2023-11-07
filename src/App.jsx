import Container from "./components/UI/Container";
import Content from "./components/Content";
import { SuccessContext } from "./store/SuccessContext";
import { useContext } from "react";
import Success from "./components/Success";

function App() {
  const successCtx = useContext(SuccessContext);
  return (
    <main>
      {successCtx.isSuccess && <Success />}
      {!successCtx.isSuccess && (
        <div id="newsletter-container">
          <Container>
            <Content />
          </Container>
        </div>
      )}
    </main>
  );
}

export default App;
