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

interface Props {
  product: Product;
}

const likeImg = require("../../../../../assets/icons/like.png");

const CategoryCard = ({ product }: Props) => {
  return (
    <>
      <Container activeOpacity={0.85} onPress={() => {}}>
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
