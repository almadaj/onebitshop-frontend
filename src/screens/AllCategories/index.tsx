import React from "react";
import { Container } from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import CategoryList from "../../components/Categories/CategoryList";

const AllCategories = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="TODAS AS CATEGORIAS" fontSize={20} />
        <CategoryList />
      </Container>
      <NavBar />
    </>
  );
};

export default AllCategories;
