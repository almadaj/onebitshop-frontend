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

interface ProductProps {
  product: Product;
}

const like = require("../../../../../assets/icons/like.png");
const CategoryCard = ({ product }: ProductProps) => {
  return (
    <Container>
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
