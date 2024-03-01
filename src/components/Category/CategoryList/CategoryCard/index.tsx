import React from "react";
import {
  Button,
  Container,
  Image,
  InfoContainer,
  Like,
  LikeContainer,
  Price,
  PublishedText,
  Title,
} from "./styles";
import { Product } from "../../../../screens/AllCategories";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";

interface Props {
  product: Product;
}

const likeImg = require("../../../../../assets/icons/like.png");

const CategoryCard = ({ product }: Props) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <>
      <Container
        activeOpacity={0.85}
        onPress={() => {
          navigation.navigate("Product");
        }}
      >
        <Image source={{ uri: product.productImage }} />
        <InfoContainer>
          <Title numberOfLines={2}>{product.title}</Title>
          <Price>R$ {product.price}</Price>

          <LikeContainer>
            <PublishedText>
              Publicado em {"\n"}
              {product.publishedData}
            </PublishedText>
            <Button onPress={() => {}}>
              <Like source={likeImg} />
            </Button>
          </LikeContainer>
        </InfoContainer>
      </Container>
    </>
  );
};

export default CategoryCard;
