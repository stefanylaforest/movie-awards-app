import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header className="App-header">
      <Title>The Shoppies</Title>
    </header>
  );
};

const Title = styled.h1`
  font-size: 5vw;
  font-weight: 800;
  margin-bottom: 10px;
  margin-left: 50px;
`;

export default Header;
