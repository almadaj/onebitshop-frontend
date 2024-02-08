import React, { useState } from "react";
import { Input, InputContainer, InputMask } from "./styles";

const Form = () => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <InputContainer>
        <Input placeholder="Nome e sobrenome" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <Input placeholder="E-mail" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <InputMask
          type="cel-phone"
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          placeholder="(XX) XXXXX-XXXX"
          placeholderTextColor="#C0C0C1"
          value={phone}
          onChangeText={(value) => {
            setPhone(value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirme sua senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
    </>
  );
};

export default Form;