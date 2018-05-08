import React, { Component } from "react";
import Header from "./presentational/Header.js";
import styled from "styled-components";
import Dictionaries from "./presentational/Dictionaries.js";
import Tables from "./presentational/Tables.js";
import Tests from "./presentational/Tests.js";
import "./App.css";

const Body = styled.div`
  background-color: white;
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="MaxWidth">
          <Header />
          <Body>
            <Dictionaries />
            <Tables />
            <Tests />
          </Body>
          <div style={{ borderBottom: "solid", borderWidth: "thin" }} />
        </body>
      </div>
    );
  }
}

export default App;