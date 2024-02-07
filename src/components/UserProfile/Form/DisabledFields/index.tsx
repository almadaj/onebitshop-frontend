import React from "react";
import { InputDisabled, PlaceholderDisabled } from "./styles";

const DisabledFields = () => {
  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>Juliano Almada</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>julianoalmada@gmail.com</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>(85) 9 9999-9999</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>DROPDOWN</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default DisabledFields;
