import React from "react";
import {
  ArrowIconDisabled,
  DropDownDisabled,
  DropDownDisabledContainer,
  InputDisabled,
  PlaceholderDisabled,
} from "./styles";

const arrow = require("../../../../../assets/icons/arrow-down.png");

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
      <DropDownDisabledContainer>
        <DropDownDisabled
          setSelected={() => {}}
          data={[]}
          placeholder="Meus Endereços"
          arrowicon={<ArrowIconDisabled source={arrow} />}
        />
      </DropDownDisabledContainer>
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default DisabledFields;
