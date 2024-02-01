import React from "react";
import { Container, InputContainer, Logo, Input, Search } from "./styles";

const logo = require("../../../../assets/images/horizontal-logo.png");
const search = require("../../../../assets/icons/search.png");

const Header = () => {
  return (
    <Container>
      <Logo source={logo} />
      <InputContainer>
        <Input placeholder="Pesquisar..." placeholderTextColor="#C0C0C1" />
        <Search source={search} />
      </InputContainer>
    </Container>
  );
};

export default Header;
