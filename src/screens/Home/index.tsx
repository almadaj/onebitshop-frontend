import React from "react";
import { Container } from "./styles";

import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import ProductList from "../../components/common/ProductList";

const Home = () => {
  return (
    <Container>
      <Header />
      <ProductList />
      <NavBar />
    </Container>
  );
};

export default Home;
