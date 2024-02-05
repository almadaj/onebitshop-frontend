import React from "react";
import {
  Bold,
  CompanyLogo,
  Container,
  ForgetPassword,
  Input,
  InputContainer,
  Logo,
  RegisterText,
} from "./styles";
import BackIcon from "../../components/common/BackIcon";
import DefaultButton from "../../components/common/DefaultButton";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const logo = require("../../../assets/images/logo.png");
const company = require("../../../assets/images/logo-obc.png");

const Login = () => {
  const navigation = useNavigation<PropsStack>();

  const handleLogin = () => {
    Alert.alert("Botão de login clicado");
  };
  // const handleRegister = () => {
  //   Alert.alert("Botão de registro clicado");
  // };
  return (
    <Container>
      <BackIcon marginLeft={30} />
      <Logo source={logo} />
      <InputContainer>
        <Input placeholder="Email" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry={true}
        />
      </InputContainer>
      <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
      <DefaultButton
        buttonText="Fazer Login"
        buttonType="primary"
        marginVertical={40}
        buttonHandle={handleLogin}
      />
      <RegisterText
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Ainda não tem conta? <Bold>Registre-se aqui!</Bold>
      </RegisterText>
      <CompanyLogo source={company} />
    </Container>
  );
};

export default Login;
