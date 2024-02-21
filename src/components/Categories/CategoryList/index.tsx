import React from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styles";

const CategoryList = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Pets</Title>
          <SeeMore>Veja Mais...</SeeMore>
        </TitleContainer>
      </Container>
    </>
  );
};

export default CategoryList;
