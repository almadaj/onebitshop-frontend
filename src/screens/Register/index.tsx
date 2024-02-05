import React from "react";
import { AcceptTerms, CompanyLogo, Container, Title } from "./styles";
import BackIcon from "../../components/common/BackIcon";
import Form from "../../components/Register/Form";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const companyLogo = require("../../../assets/images/logo-obc.png");

const Register = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container contentContainerStyle={{ paddingBottom: 30 }}>
      <BackIcon marginLeft={20} />
      <Title>CRIE SUA CONTA</Title>
      <Form />
      <DefaultButton
        buttonText={"FAZER REGISTRO"}
        buttonType={"primary"}
        marginVertical={20}
        buttonHandle={() => {}}
      />
      <AcceptTerms>
        Ao fazer registro aceito os{"\n"}termos de política de privacidade
      </AcceptTerms>
      <DefaultButton
        buttonText={"FAZER LOGIN"}
        buttonType={"secondary"}
        marginVertical={20}
        buttonHandle={() => {
          navigation.navigate("Login");
        }}
      />
      <CompanyLogo source={companyLogo} />
    </Container>
  );
};

export default Register;
