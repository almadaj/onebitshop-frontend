import React from "react";
import {
  ArrowIconDisabled,
  DropDownDisabled,
  DropDownDisabledContainer,
  InputDisabled,
  PlaceholderDisabled,
} from "./styles";
import { User } from "../../../../entitites/User";

const arrow = require("../../../../../assets/icons/arrow-down.png");
interface Props {
  userInfo: User;
}
const DisabledFields = ({ userInfo }: Props) => {
  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.name}</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.email}</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.phone}</PlaceholderDisabled>
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
