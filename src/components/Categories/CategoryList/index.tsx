import React, { useEffect, useState } from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styles";
import { Category } from "../../../screens/AllCategories";
import { FlatList, ListRenderItem } from "react-native";
import CategoryCard from "./CategoryCard";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { Product } from "../../../entitites/Product";
import favoriteService from "../../../services/favoriteService";
import useAuth from "../../../hook/useAuth";

interface Props {
  category: Category;
}

const CategoryList = ({ category }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const [favorites, setFavorites] = useState<string[]>([]);
  const { token } = useAuth();

  const handleGetFavorites = async () => {
    if (!token) return;

    const res = await favoriteService.getFavorites();

    const isLiked = res.data.map((val: Product) => {
      return val._id;
    });

    setFavorites(isLiked);
  };

  const isFavorite = (product: Product) =>
    !!favorites.find((favorite) => (product._id === favorite ? true : false));

  useEffect(() => {
    handleGetFavorites();
  }, []);
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <CategoryCard product={item} key={item._id} favorite={isFavorite(item)} />
    );
  };
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>{category.category._id}</Title>
          <SeeMore
            onPress={() => {
              navigation.navigate("Category", {
                _id: category.category._id,
                product: category.category.products,
              });
            }}
          >
            Veja Mais
          </SeeMore>
        </TitleContainer>

        <FlatList
          data={category.category.products}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    </>
  );
};

export default CategoryList;
