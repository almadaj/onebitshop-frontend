import React from "react";
import {
  AdCard,
  Container,
  InfoContainer,
  NoAds,
  Price,
  PriceTitleContainer,
  Title,
  TotalAds,
  Image,
  InfoIconContainer,
  PublishedText,
  Icon,
  IconButton,
} from "./styles";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const trash = require("../../../../assets/icons/trash.png");
const favorite = require("../../../../assets/icons/like.png");

interface Product {
  id: string;
  productImage: string;
  price: string;
  title: string;
  publishedData: string;
}

interface ProductProps {
  products: Product[];
  seller: boolean;
}

const UserAds = ({ products, seller }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();

  const handleEditProduct = () => {
    if (!seller) {
      navigation.navigate("AddProduct");
    } else {
      navigation.navigate("Product");
    }
  };
  return (
    <Container>
      <TotalAds>Você tem {products.length} anúncios</TotalAds>
      {products.length > 0 ? (
        products.map((product) => (
          <AdCard
            activeOpacity={0.85}
            onPress={() => {
              handleEditProduct;
            }}
            key={product.id}
          >
            <Image
              source={{
                uri: product.productImage,
              }}
            />
            <InfoContainer>
              <PriceTitleContainer>
                <Price>R$ {product.price}</Price>
                <Title numberOfLines={2}>{product.title}</Title>
              </PriceTitleContainer>

              <InfoIconContainer>
                <PublishedText>
                  Publicado em {product.publishedData}
                </PublishedText>

                {!seller ? (
                  <IconButton
                    onPress={() => {
                      Alert.alert("Item para ser excluído");
                    }}
                    activeOpacity={0.85}
                  >
                    <Icon source={trash} />
                  </IconButton>
                ) : (
                  <IconButton
                    onPress={() => {
                      Alert.alert("Item para ser excluído");
                    }}
                    activeOpacity={0.85}
                  >
                    <Icon source={favorite} />
                  </IconButton>
                )}
              </InfoIconContainer>
            </InfoContainer>
          </AdCard>
        ))
      ) : (
        <NoAds>Por enquanto você não criou anúncios</NoAds>
      )}
    </Container>
  );
};

export default UserAds;
