import React from "react";
import { InputDisabled, PlaceholderDisabled } from "./styles";
import DropDownComponent from "../../../common/DropDownComponent";

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
        <PlaceholderDisabled>DisabledDropDown</PlaceholderDisabled>
      </InputDisabled>
      {/* <DropDownComponent /> */}
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default DisabledFields;
