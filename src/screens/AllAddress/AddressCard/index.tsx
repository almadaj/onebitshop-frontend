import React, { SetStateAction } from "react";
import { Container, ContentTxt, DeleteBtn, DeleteIcon } from "./styles";
import { Address } from "../../../entitites/User";
import { Alert } from "react-native";
import addressService from "../../../services/addressService";

interface ItemProps {
  item: Address;
  address: Address[];
  setAddress: React.Dispatch<SetStateAction<Array<Address>>>;
}

const deleteIcon = require("../../../../assets/icons/trash.png");

const AddressCard = ({ item, address, setAddress }: ItemProps) => {
  const handleDeleteAddress = async () => {
    Alert.alert("Você tem certeza?", "Você irá deletar o endereço", [
      {
        text: "Sim",
        onPress: () => {
          addressService.deleteAddress(item._id);
          const filteredAddresses = address.filter(
            (address) => address._id !== item._id
          );
          setAddress(filteredAddresses);
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  return (
    <Container>
      <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep}`}</ContentTxt>
      <DeleteBtn onPress={handleDeleteAddress}>
        <DeleteIcon source={deleteIcon} />
      </DeleteBtn>
    </Container>
  );
};

export default AddressCard;
