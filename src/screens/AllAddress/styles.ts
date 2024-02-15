import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight + 20}px;
`;

export const NoAdd = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  margin-top: 50%;
  margin-bottom: 5%;
`;

export const CreateAddBtn = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primaryButton};
  margin: 0 auto;
  border-radius: 15px;
`;

export const CreateAddBtnText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;
