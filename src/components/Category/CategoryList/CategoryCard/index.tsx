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
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Product } from "../../../../entitites/Product";
import getDate from "../../../../utils/getDate";

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
          navigation.navigate("Product", { ...product });
        }}
      >
        <Image source={{ uri: product.images[0].url }} />
        <InfoContainer>
          <Title numberOfLines={2}>{product.name}</Title>
          <Price>R$ {product.price}</Price>

          <LikeContainer>
            <PublishedText>
              Publicado em {"\n"}
              {getDate(product.createdAt)}
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
