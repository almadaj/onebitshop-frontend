import React from "react";
import { AddressText, Input } from "./styles";
import { InputContainer } from "../styles";
import { Alert } from "react-native";
import DefaultButton from "../../../common/DefaultButton";

const AbledFields = () => {
  return (
    <>
      <InputContainer>
        <Input value="Juliano Almada"></Input>
      </InputContainer>
      <InputContainer>
        <Input value="julianoalmada48@gmail.com"></Input>
      </InputContainer>
      <InputContainer>
        <Input value="(85) 9 9999-9999"></Input>
      </InputContainer>
      <InputContainer>
        <Input value="DROPDOWN"></Input>
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        ></Input>
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Nova Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        ></Input>
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirmar Nova Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        ></Input>
      </InputContainer>
      <AddressText
        onPress={() => {
          Alert.alert("Gerente de endereço");
        }}
      >
        Gerenciar Endereços
      </AddressText>
      <DefaultButton
        buttonText={"Salvar Alterações"}
        buttonType={"primary"}
        marginVertical={10}
        buttonHandle={() => {
          Alert.alert("Salvando alterações");
        }}
      />
    </>
  );
};

export default AbledFields;
