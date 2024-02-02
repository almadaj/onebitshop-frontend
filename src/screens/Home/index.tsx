import React from "react";
import { Container } from "./styles";

import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";

const Home = () => {
  return (
    <Container>
      <Header />
      <NavBar />
    </Container>
  );
};

export default Home;
