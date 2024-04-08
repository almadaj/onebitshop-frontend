import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  Container,
  Name,
  NoRate,
  SeeProfile,
  SellerContainer,
} from "./styles";
import { PropsStack } from "../../../routes";
import { AirbnbRating } from "react-native-ratings";
import useAuth from "../../../hook/useAuth";
import { Product } from "../../../entitites/Product";

interface Props {
  product: Product;
}

const SellerInfo = ({ product }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const Rate = parseInt(product.seller.rating);
  const { token } = useAuth();

  return (
    <Container>
      <SellerContainer>
        <Name>{product.seller.name}</Name>

        {!Rate ? (
          <NoRate
            onPress={() => {
              token === null
                ? navigation.navigate("Login")
                : navigation.navigate("Feedback");
            }}
          >
            Sem Avaliação
          </NoRate>
        ) : (
          <Button
            onPress={() => {
              token === null
                ? navigation.navigate("Login")
                : navigation.navigate("Feedback");
            }}
          >
            <AirbnbRating
              selectedColor="#5F96ED"
              showRating={false}
              isDisabled={true}
              size={16}
              defaultRating={Rate}
            />
          </Button>
        )}
      </SellerContainer>
      <SeeProfile
        onPress={() => {
          navigation.navigate("SellerProfile", {
            sellerId: product.seller._id,
          });
        }}
      >
        Ver Perfil
      </SeeProfile>
    </Container>
  );
};

export default SellerInfo;
