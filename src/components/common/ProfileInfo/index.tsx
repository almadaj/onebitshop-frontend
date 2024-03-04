import React from "react";
import {
  Button,
  Container,
  DefaultText,
  Hr,
  MainInfoContainer,
  Name,
  NamePhoneContainer,
  Phone,
} from "./styles";
import { AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const ProfileInfo = () => {
  const navigation = useNavigation<PropsStack>();
  const Rate = 4;
  return (
    <>
      <Container>
        <MainInfoContainer>
          <NamePhoneContainer>
            <Name>Juliano Almada</Name>
            <Phone>(85) 9 9854-9193</Phone>
          </NamePhoneContainer>
          {!Rate ? (
            <DefaultText
              onPress={() => {
                navigation.navigate("Feedback");
              }}
            >
              Sem Avaliações
            </DefaultText>
          ) : (
            <Button
              onPress={() => {
                navigation.navigate("Feedback");
              }}
            >
              <AirbnbRating
                selectedColor="#5F96ED"
                showRating={false}
                isDisabled={true}
                size={16}
                defaultRating={Rate}
                starContainerStyle={{
                  paddingTop: 4,
                }}
              />
            </Button>
          )}
        </MainInfoContainer>
        <DefaultText>Usuário desde 2023</DefaultText>
        <DefaultText>04 anúncios ativos</DefaultText>
      </Container>
      <Hr />
    </>
  );
};

export default ProfileInfo;
