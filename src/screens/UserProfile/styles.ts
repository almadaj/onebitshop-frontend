import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight + 20}px;
`;

export const LogOutBtn = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.denounceButton};
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 5px;
`;

export const LogOutText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const DeleteAcc = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 18px;
  color: ${({ theme }) => theme.colors.denounceButton};
`;

export const AddressText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primaryText};
`;
