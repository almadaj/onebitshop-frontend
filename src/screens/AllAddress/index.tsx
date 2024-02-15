import React from "react";
import { Container, CreateAddBtn, CreateAddBtnText, NoAdd } from "./styles";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import { FlatList, ListRenderItem, View } from "react-native";

export interface Address {
  _id: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  cep: string;
}

// const Data = [
//   {
//     _id: "1",
//     street: "Rua das Acácias",
//     number: "321",
//     complement: "",
//     district: "Boa Viagem",
//     city: "Recife",
//     state: "PE",
//     cep: "51030200",
//   },
//   {
//     _id: "2",
//     street: "Avenida das Flores",
//     number: "456",
//     complement: "",
//     district: "Centro",
//     city: "Cuiabá",
//     state: "MT",
//     cep: "78005100",
//   },
//   {
//     _id: "3",
//     street: "Rua das Jabuticabeiras",
//     number: "987",
//     complement: "",
//     district: "Mangabeiras",
//     city: "Maceió",
//     state: "AL",
//     cep: "57037100",
//   },
// ];

const Data = [];

const AllAddress = () => {
  const renderItem: ListRenderItem<Address> = ({ item }) => (
    <View item={item} />
  );
  return (
    <>
      <Container>
        <DefaultTitle fontSize={18} title="TODOS OS ENDEREÇOS" />
        {Data.length <= 0 ? (
          <>
            <NoAdd>Você não tem endereços{"\n"}cadastrados no momento!</NoAdd>
            <CreateAddBtn>
              <CreateAddBtnText>Criar Endereço</CreateAddBtnText>
            </CreateAddBtn>
          </>
        ) : (
          <FlatList
            data={Data}
            keyExtractor={(item: Address) => item._id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Container>
      <NavBar />
    </>
  );
};

export default AllAddress;
