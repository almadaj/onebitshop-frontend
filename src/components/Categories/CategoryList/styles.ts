import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-left: 30px;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const SeeMore = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding-right: 20px;
`;
