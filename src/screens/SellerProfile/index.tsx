import React, { useEffect, useState } from "react";
import { AdsContainer, Container, DenounceText } from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import UserAds from "../../components/UserProfile/UserAds";
import DefaultButton from "../../components/common/DefaultButton";
import NavBar from "../../components/common/NavBar";
import { useNavigation } from "@react-navigation/native";
import { PropsNavigationStack, PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Seller } from "../../entitites/Product";
import profileService from "../../services/profileService";
import Loader from "../Loader";
import { User } from "../../entitites/User";
import chatService from "../../services/chatService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

type Props = NativeStackScreenProps<PropsNavigationStack, "SellerProfile">;
const SellerProfile = ({ route }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<User>();

  const handleGetInfos = async () => {
    const data = await profileService.getSellerProfile(route.params);
    setUserInfo(data?.data);
    setLoading(false);
  };

  useEffect(() => {
    handleGetInfos();
  }, []);

  if (!userInfo || loading) {
    return <Loader />;
  }
  const handleChatSeller = async () => {
    if (userInfo.products.length <= 0) {
      Alert.alert(
        "Esse vendedor não vende nada, então você não pode falar com ele!"
      );
      return;
    }

    const user = await AsyncStorage.getItem("user");
    const { _id } = JSON.parse(user || "");

    const initialMessage = `Olá, quero saber mais sobre o seu produto, ${userInfo.name}`;

    const params = {
      product: userInfo.products[0]._id,
      seller: userInfo._id,
      initialMessage,
    };

    const res = await chatService.startChat(params);

    if (res.status === 201) {
      navigation.navigate("Chat", {
        product: userInfo.products[0],
        sellerName: userInfo.name,
        sellerId: userInfo._id,
        buyerId: _id,
        messages: [
          {
            content: initialMessage,
            receiver: userInfo._id,
            sender: _id,
          },
        ],
      });
    }
  };

  return (
    <>
      <Container
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <DefaultTitle title="PERFIL DO VENDEDOR" fontSize={20} />
        <ProfileInfo userInfo={userInfo} />
        <AdsContainer>
          <UserAds product={userInfo?.products} seller={true} />
        </AdsContainer>
        <DefaultButton
          buttonText="Fale com o vendedor"
          buttonType="primary"
          buttonHandle={() => {}}
          marginVertical={10}
        />
        <DenounceText
          onPress={() => {
            token === null
              ? navigation.navigate("Login")
              : navigation.navigate("Denounce");
          }}
        >
          Achou algo estranho? Denuncie!
        </DenounceText>
      </Container>
      <NavBar />
    </>
  );
};

export default SellerProfile;
