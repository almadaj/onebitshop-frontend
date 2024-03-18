import React from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styles";
import { Category } from "../../../screens/AllCategories";
import { FlatList, ListRenderItem } from "react-native";
import CategoryCard from "./CategoryCard";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { Product } from "../../../entitites/Product";

const CategoryList = ({ category }: Category) => {
  const navigation = useNavigation<PropsStack>();
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return <CategoryCard product={item} key={item._id} />;
  };
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>{category._id}</Title>
          <SeeMore
            onPress={() => {
              navigation.navigate("Category", {
                _id: category._id,
                product: category.product,
              });
            }}
          >
            Veja Mais
          </SeeMore>
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
