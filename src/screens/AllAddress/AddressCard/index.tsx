import React from "react";
import { Container, ContentTxt, DeleteBtn, DeleteIcon } from "./styles";
import { Address } from "../../../entitites/User";
import { Alert } from "react-native";

interface ItemProps {
  item: Address;
}

const deleteIcon = require("../../../../assets/icons/trash.png");

const AddressCard = ({ item }: ItemProps) => {
  return (
    <Container>
      <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep}`}</ContentTxt>
      <DeleteBtn
        onPress={() => {
          Alert.alert("Deletando");
        }}
      >
        <DeleteIcon source={deleteIcon} />
      </DeleteBtn>
    </Container>
  );
};

export default AddressCard;
