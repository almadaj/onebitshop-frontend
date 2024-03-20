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

const SellerInfo = () => {
  const navigation = useNavigation<PropsStack>();
  const Rate = 4;
  const { token } = useAuth();

  return (
    <Container>
      <SellerContainer>
        <Name>Lucas Queiroga</Name>

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
              starContainerStyle={{
                marginLeft: -20,
              }}
            />
          </Button>
        )}
      </SellerContainer>
      <SeeProfile
        onPress={() => {
          navigation.navigate("SellerProfile");
        }}
      >
        Ver Perfil
      </SeeProfile>
    </Container>
  );
};

export default SellerInfo;
