import styled from "styled-components/native";
import { InputContainer } from "../styles";
import {
  ArrowIcon,
  DropDown,
  DropDownContainer,
} from "../../../common/DropDownComponent/styles";

export const InputDisabled = styled(InputContainer)`
  background-color: transparent;
`;

export const PlaceholderDisabled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const DropDownDisabledContainer = styled(DropDownContainer).attrs({
  PointerEvents: "none",
})``;

export const DropDownDisabled = styled(DropDown).attrs({
  boxStyles: {
    minWidth: "100%",
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputStyles: {
    color: "#C0C0C1",
    fontWeight: "bold",
    fontSize: 16,
  },
})``;

export const ArrowIconDisabled = styled(ArrowIcon)``;
