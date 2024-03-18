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
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Product } from "../../../../entitites/Product";

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
      <Image source={{ uri: product.images[0].url }} />
      <TextContainer>
        <Title>{product.name}</Title>
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
