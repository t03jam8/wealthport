import React, { Component } from "react";
import styled from "styled-components";

//description: the web-apps header displaying the title "wealthport" and logo

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 60px;
  border-color: black;
  border-bottom: solid;
  border-width: thin;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  color: black;
`;

class Header extends Component {
  render () {
    return (
      <HeaderContainer>
        <HeaderTitle> Wealthport </HeaderTitle>
        <img
          alt="logo"
          src={require("../assests/logo.svg")}
          style={{ width: "70px", marginTop: "15px" }}
        />
      </HeaderContainer>
    );
  }
}

export default Header;
