import React from "react";
import {
  Button,
  Container,
  DenounceSeller,
  InfoContainer,
  InteractionsContainer,
  Like,
  Price,
  Share,
  Subtitle,
  SubtitleContainer,
  Title,
} from "./styles";
import BackIcon from "../../components/common/BackIcon";
import Carousel from "../../components/Product/Carousel";
import DescriptionComponent from "../../components/Product/Description";
import SellerInfo from "../../components/Product/SellerInfo";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsNavigationStack, PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import getDate from "../../utils/getDate";

const like = require("../../../assets/icons/like.png");
const share = require("../../../assets/icons/share.png");
type Props = NativeStackScreenProps<PropsNavigationStack, "Product">;
const Product = ({ route }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();
  const { params } = route;

  return (
    <Container contentContainerStyle={{ paddingBottom: 50 }}>
      <BackIcon marginLeft={30} />
      <Title>{params.name}</Title>
      <SubtitleContainer>
        <Subtitle>Publicado em {getDate(params.createdAt)}</Subtitle>
        {/* <Subtitle>Recife, PE</Subtitle> */}
      </SubtitleContainer>

      <Carousel images={params.images} />

      <InfoContainer>
        <Price>R$ {params.price}</Price>
        <InteractionsContainer>
          <Button>
            <Like source={like} />
          </Button>
          <Button>
            <Share source={share} />
          </Button>
        </InteractionsContainer>
      </InfoContainer>
      <DescriptionComponent desc={params.description} />
      <SellerInfo name={params.seller.name} />

      <DefaultButton
        buttonText={"Fale com o Vendedor"}
        buttonType={"primary"}
        marginVertical={0}
        buttonHandle={() => {}}
      />

      <DenounceSeller
        onPress={() => {
          token === null
            ? navigation.navigate("Login")
            : navigation.navigate("Denounce");
        }}
      >
        Denunciar Vendedor
      </DenounceSeller>
    </Container>
  );
};

export default Product;
