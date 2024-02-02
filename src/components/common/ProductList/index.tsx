import React from "react";
import {
  Container,
  InfoLikeContainer,
  LikeButton,
  LikeIcon,
  ProductImage,
  ProductInfoContainer,
  ProductPrice,
  ProductPriceTitleContainer,
  ProductTitle,
  PublishedText,
  SellerInfoContainer,
  SellerName,
} from "./styles";
import { FlatList, ListRenderItem } from "react-native";
import { Alert } from "react-native";

const like = require("../../../../assets/icons/like.png");
const liked = require("../../../../assets/icons/liked.png");

export interface ProductType {
  _id: string;
  productImage: string;
  price: string;
  name: string;
  publishedData: string;
  SellerName: string;
  liked: boolean;
}

const Data = [
  {
    _id: "1",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    name: "PlayStation 4 Pro",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
  {
    _id: "2",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "PlayStation 4 Pro",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: true,
  },
  {
    _id: "3",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "PlayStation 4 Pro",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
  {
    _id: "4",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "PlayStation 4 Pro",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: true,
  },
  {
    _id: "5",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "PlayStation 4 Pro",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
];

const ProductList = () => {
  const Item = ({ data }: { data: ProductType }) => (
    <Container
      activeOpacity={0.85}
      onPress={() => {
        Alert.alert("Nav2prod!");
      }}
    >
      <ProductImage
        source={{
          uri: data.productImage,
        }}
      />
      <ProductInfoContainer>
        <ProductPriceTitleContainer>
          <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
          <ProductPrice>R$ {data.price}</ProductPrice>
        </ProductPriceTitleContainer>
        <InfoLikeContainer>
          <SellerInfoContainer>
            <PublishedText>Publicado em {data.publishedData}</PublishedText>
            <SellerName>{data.SellerName}</SellerName>
          </SellerInfoContainer>
          {!data.liked ? (
            <LikeButton
              onPress={() => {
                Alert.alert("Like!");
              }}
            >
              <LikeIcon source={like} />
            </LikeButton>
          ) : (
            <LikeButton
              onPress={() => {
                Alert.alert("Like!");
              }}
            >
              <LikeIcon source={liked} />
            </LikeButton>
          )}
        </InfoLikeContainer>
      </ProductInfoContainer>
    </Container>
  );
  const renderItem: ListRenderItem<ProductType> = ({ item }) => (
    <Item data={item} />
  );
  return (
    <FlatList
      data={Data}
      keyExtractor={(item: ProductType) => item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    />
  );
};

export default ProductList;
