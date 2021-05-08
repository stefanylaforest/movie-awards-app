import React from "react";
import Home from "./Home";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const App = () => {
  return (
    <Container className="App">
      <GlobalStyles />
      <Home />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
