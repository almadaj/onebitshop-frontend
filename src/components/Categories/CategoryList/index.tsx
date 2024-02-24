import React from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styles";
import { Category, Product } from "../../../screens/AllCategories";
import { FlatList, ListRenderItem } from "react-native";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ category }: Category) => {
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return <CategoryCard product={item} key={item.id} />;
  };
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>{category._id}</Title>
          <SeeMore>Veja Mais...</SeeMore>
        </TitleContainer>

        <FlatList
          data={category.product}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </>
  );
};

export default CategoryList;
