import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 20px 0;
`;

export const EditBtnContainer = styled.View`
  width: 90%;
  align-items: flex-end;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const EditBtn = styled.TouchableOpacity``;

export const BtnImg = styled.Image.attrs({ resizeMode: "contain" })`
  height: 35px;
  width: 35px;
`;

export const InputContainer = styled.View`
  width: 90%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  margin: 10px auto;
  padding-left: 10px;
  justify-content: center;
`;
