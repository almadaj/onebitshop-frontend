import React, { SetStateAction, useState } from "react";
import { Input, InputContainer, InputMask } from "./styles";

interface Fields {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  fields: Fields;
  setFields: React.Dispatch<SetStateAction<Fields>>;
}

const Form = ({ fields, setFields }: Props) => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <InputContainer>
        <Input
          placeholder="Nome e sobrenome"
          placeholderTextColor="#C0C0C1"
          value={fields.name}
          onChangeText={(val) => {
            setFields({
              ...fields,
              name: val,
            });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="E-mail"
          placeholderTextColor="#C0C0C1"
          value={fields.email}
          onChangeText={(val) => {
            setFields({
              ...fields,
              email: val,
            });
          }}
        />
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
          value={fields.phone}
          onChangeText={(val) => {
            setFields({
              ...fields,
              phone: val,
            });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          value={fields.password}
          onChangeText={(val) => {
            setFields({
              ...fields,
              password: val,
            });
          }}
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirme sua senha"
          placeholderTextColor="#C0C0C1"
          value={fields.confirmPassword}
          onChangeText={(val) => {
            setFields({
              ...fields,
              confirmPassword: val,
            });
          }}
          secureTextEntry
        />
      </InputContainer>
    </>
  );
};

export default Form;
