import React from "react";
import {
  Container,
  InfoLikeContainer,
  LikeButton,
  LikeIcon,
  ProductImage,
  ProductInfoContainer,
  ProductPrice,
  ProductTitle,
  PublishedText,
  SellerInfoContainer,
  SellerName,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Product } from "../../../../entitites/Product";
import getDate from "../../../../utils/getDate";
import Like from "../../Like";

const likeImage = require("../../../../../assets/icons/like.png");
const likedImage = require("../../../../../assets/icons/liked.png");

interface DataProps {
  data: Product;
  favorite: boolean;
}

const ProductCard = ({ data, favorite }: DataProps) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      activeOpacity={0.85}
      onPress={() => {
        navigation.navigate("Product", { ...data });
      }}
    >
      <ProductImage source={{ uri: data.images[0].url }} />
      <ProductInfoContainer>
        <ProductPrice>R$ {data.price}</ProductPrice>
        <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
        <InfoLikeContainer>
          <SellerInfoContainer>
            <PublishedText>
              Publicado em {getDate(data.createdAt)} por:
            </PublishedText>
            <SellerName>{data.seller.name}</SellerName>
          </SellerInfoContainer>
          <Like favorites={favorite} productId={data._id} />
        </InfoLikeContainer>
      </ProductInfoContainer>
    </Container>
  );
};

export default ProductCard;
