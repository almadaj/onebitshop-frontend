import React from "react";
import { BackContainer, BackImage } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const back = require("../../../../assets/icons/arrow-left.png");

type props = {
  marginLeft: number;
};

const BackIcon = ({ marginLeft }: props) => {
  const navigation = useNavigation<PropsStack>();
  return (
    <BackContainer
      onPress={() => {
        navigation.goBack();
      }}
    >
      <BackImage marginLeft={30} source={back} />
    </BackContainer>
  );
};

export default BackIcon;
