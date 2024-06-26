import React, { useEffect, useState } from "react";
import {
  AddressText,
  Container,
  DeleteAcc,
  LogOutBtn,
  LogOutText,
} from "./styles";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import Form from "../../components/UserProfile/Form";
import UserAds from "../../components/UserProfile/UserAds";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { LogBox } from "react-native";
import { Seller } from "../../entitites/Product";
import useAuth from "../../hook/useAuth";
import profileService from "../../services/profileService";
import Loader from "../Loader";
import { User } from "../../entitites/User";

LogBox.ignoreLogs([`to contain units`]);
const Data = [
  {
    id: "1",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    title: "Playstation 4 novo com 3 jogos acompanhando",
    publishedData: "02/23",
  },
  {
    id: "2",
    productImage:
      "https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
    price: "2600",
    title: "Playstation 5 novo com 1 jogo acompanhando",
    publishedData: "02/23",
  },
  {
    id: "3",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    title: "Playstation 4 novo com 2 jogos acompanhando",
    publishedData: "02/23",
  },
];

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<User>();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<PropsStack>();

  const { logout } = useAuth();

  const handleUserInfos = async () => {
    const { data } = await profileService.getUserProfile();
    setUserInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    handleUserInfos();
  }, []);

  const handleDeleteAcc = () => {
    Alert.alert(
      "Você tem certeza?",
      "Ao fazer isso você deleterá a sua conta permanentemente",
      [
        {
          text: "Sim",
          onPress: () => {
            Alert.alert("Você deletou a sua conta!");
          },
        },

        {
          text: "Não",
        },
      ]
    );
  };

  if (!userInfo) {
    return <Loader />;
  }

  return (
    <>
      <Container
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <DefaultTitle fontSize={20} title="MEU PERFIL" />
        <ProfileInfo userInfo={userInfo} />
        <Form userInfo={userInfo} />
        <AddressText
          onPress={() => {
            navigation.navigate("AllAddress", { newAddress: false });
          }}
        >
          Gerenciar Endereços
        </AddressText>
        <UserAds product={userInfo.products} seller={false} />
        <LogOutBtn onPress={logout}>
          <LogOutText>Sair da conta</LogOutText>
        </LogOutBtn>
        <DeleteAcc onPress={handleDeleteAcc}>Excluir Conta</DeleteAcc>
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
