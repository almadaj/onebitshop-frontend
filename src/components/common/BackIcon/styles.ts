import styled from "styled-components/native";

type BackIcon = {
  marginLeft: number;
};
export const BackContainer = styled.TouchableOpacity``;

export const BackImage = styled.Image.attrs({
  resizeMode: "contain",
})<BackIcon>`
  width: 40px;
  margin-left: ${(props) => props.marginLeft}px;
`;
