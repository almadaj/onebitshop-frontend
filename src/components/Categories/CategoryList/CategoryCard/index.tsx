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
import Like from "../../../common/Like";

interface ProductProps {
  product: Product;
  favorite: boolean;
}

const CategoryCard = ({ product, favorite }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      onPress={() => {
        navigation.navigate("Product", { ...product });
      }}
    >
      <Image source={{ uri: product.images[0].url }} />
      <TextContainer>
        <Title>{product.name}</Title>
        <Price>R$ {product.price}</Price>

        <SellerLikeContainer>
          <SellerName>John Doe</SellerName>

          <Like favorites={favorite} productId={product._id} />
        </SellerLikeContainer>
      </TextContainer>
    </Container>
  );
};

export default CategoryCard;
