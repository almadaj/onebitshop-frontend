import React from "react";
import { Container } from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";

type Props = NativeStackScreenProps<PropsNavigationStack, "Category">;

const Category = ({ route }: Props) => {
  return (
    <Container>
      <DefaultTitle title={route.params._id} fontSize={20} />
    </Container>
  );
};

export default Category;
