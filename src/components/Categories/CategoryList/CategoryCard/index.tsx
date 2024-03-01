import React from "react";
import {
  Container,
  Image,
  LikeImage,
  Price,
  SellerLikeContainer,
  SellerName,
  TextContainer,
  Title,
} from "./styles";
import { Product } from "../../../../screens/AllCategories";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";

interface ProductProps {
  product: Product;
}

const like = require("../../../../../assets/icons/like.png");
const CategoryCard = ({ product }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      onPress={() => {
        navigation.navigate("Product");
      }}
    >
      <Image source={{ uri: product.productImage }} />
      <TextContainer>
        <Title>{product.title}</Title>
        <Price>R$ {product.price}</Price>

        <SellerLikeContainer>
          <SellerName>John Doe</SellerName>

          <LikeImage source={like} />
        </SellerLikeContainer>
      </TextContainer>
    </Container>
  );
};

export default CategoryCard;
