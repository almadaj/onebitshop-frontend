import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  DenounceSeller,
  InfoContainer,
  InteractionsContainer,
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
import favoriteService from "../../services/favoriteService";
import { Product as ProductType } from "../../entitites/Product";
import Like from "../../components/common/Like";

const like = require("../../../assets/icons/like.png");
const share = require("../../../assets/icons/share.png");
type Props = NativeStackScreenProps<PropsNavigationStack, "Product">;
const Product = ({ route }: Props) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();
  const { params } = route;

  const handleGetFavorites = async () => {
    if (!token) return;

    const res = await favoriteService.getFavorites();

    const isLiked = res.data.map((val: ProductType) => {
      return val._id;
    });

    const liked = isLiked.some((liked: string) => route.params._id === liked);

    setLiked(liked);
  };

  useEffect(() => {
    handleGetFavorites();
  }, [route]);

  return (
    <Container contentContainerStyle={{ paddingBottom: 50 }}>
      <BackIcon marginLeft={30} />
      <Title>{params.name}</Title>
      <SubtitleContainer>
        <Subtitle>Publicado em {getDate(params.createdAt)}</Subtitle>
        <Subtitle>
          {route.params.address.city}, {route.params.address.state}
        </Subtitle>
      </SubtitleContainer>

      <Carousel images={params.images} />

      <InfoContainer>
        <Price>R$ {params.price}</Price>
        <InteractionsContainer>
          <Like favorites={liked} productId={route.params._id} />
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
