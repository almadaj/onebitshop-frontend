import React from "react";
import DefaultTitle from "../../components/common/DefaultTitle";
import { Button, ButtonText, Container, Input, InputContainer } from "./styles";
import ProfileInfo from "../../components/common/ProfileInfo";
import NavBar from "../../components/common/NavBar";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { Alert } from "react-native";

const Denounce = () => {
  const navigation = useNavigation<PropsStack>();
  return (
    <>
      <Container>
        <DefaultTitle title="DENUNCIAR" fontSize={20} />
        <ProfileInfo />
        <InputContainer>
          <Input multiline placeholder="Escreva aqui sua denúncia..." />
        </InputContainer>
        <Button
          onPress={() => {
            navigation.goBack();
            Alert.alert("Sua denúncia foi feita com sucesso!");
          }}
        >
          <ButtonText>DENUNCIAR</ButtonText>
        </Button>
        <NavBar />
      </Container>
    </>
  );
};

export default Denounce;
