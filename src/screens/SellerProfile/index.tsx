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
