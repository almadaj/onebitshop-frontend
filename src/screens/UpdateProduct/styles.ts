import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const InputContainer = styled.View`
  width: 90%;
  height: 40px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  margin: 10px auto;
`;

export const DescriptionContainer = styled(InputContainer)`
  min-height: 80px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "white",
})`
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Division = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
`;
