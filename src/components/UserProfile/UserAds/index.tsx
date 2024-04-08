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
import { Product } from "../../../entitites/Product";
import getDate from "../../../utils/getDate";
import productService from "../../../services/productService";

const trash = require("../../../../assets/icons/trash.png");
const favorite = require("../../../../assets/icons/like.png");

interface ProductProps {
  product: Product[];
  seller: boolean;
}

const UserAds = ({ product, seller }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();
  const handleDeleteProduct = async (_id: string) => {
    const params = {
      _id,
    };

    const res = await productService.deleteProduct(params);

    if (res.status === 204) {
      Alert.alert("Produto deletado com sucesso");
      navigation.navigate("Home");
    }
  };
  return (
    <Container>
      <TotalAds>Você tem {product.length} anúncios</TotalAds>
      {product.length > 0 ? (
        product.map((product) => (
          <AdCard
            activeOpacity={0.85}
            onPress={() => {
              !seller
                ? navigation.navigate("UpdateProduct", {
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    images: product.images,
                    category: product.category,
                    addressId: product.address._id,
                    published: product.publishedData,
                  })
                : navigation.navigate("Product", {
                    ...product,
                  });
            }}
            key={product._id}
          >
            <Image
              source={{
                uri: product.images[0].url,
              }}
            />
            <InfoContainer>
              <PriceTitleContainer>
                <Price>R$ {product.price}</Price>
                <Title numberOfLines={2}>{product.name}</Title>
              </PriceTitleContainer>

              <InfoIconContainer>
                <PublishedText>
                  Publicado em {getDate(product.createdAt)}
                </PublishedText>

                {!seller ? (
                  <IconButton
                    onPress={() => {
                      Alert.alert(
                        "Você tem certeza?",
                        "Ao fazer isso você deleterá o produto permanentemente.",
                        [
                          {
                            text: "Sim",
                            onPress: () => {
                              handleDeleteProduct(product._id);
                            },
                          },
                          {
                            text: "Não",
                          },
                        ]
                      );
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
