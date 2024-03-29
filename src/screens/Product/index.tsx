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
import { PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";

const images = [
  {
    filename: "image1",
    url: "https://i.zst.com.br/thumbs/12/26/3d/-1147399814.jpg",
  },
  {
    filename: "image2",
    url: "https://classic.exame.com/wp-content/uploads/2021/05/ps5-the-squad-foto-1.jpg?quality=70&strip=info&w=984",
  },
  {
    filename: "image3",
    url: "https://cdn.awsli.com.br/1824/1824967/produto/186131938/67bd1ea8d4.jpg",
  },
  {
    filename: "image4",
    url: "https://cdn.awsli.com.br/600x700/1734/1734513/produto/97494476/030cda119d.jpg",
  },
];

const like = require("../../../assets/icons/like.png");
const share = require("../../../assets/icons/share.png");

const Product = () => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil recusandae laudantium hic, magnam necessitatibus eius quam asperiores corrupti sunt nam!";
  return (
    <Container contentContainerStyle={{ paddingBottom: 50 }}>
      <BackIcon marginLeft={30} />
      <Title>Playstation 4 com 2 controles</Title>
      <SubtitleContainer>
        <Subtitle>Publicado em 10/05/23</Subtitle>
        <Subtitle>Recife, PE</Subtitle>
      </SubtitleContainer>

      <Carousel images={images} />

      <InfoContainer>
        <Price>R$ 2500</Price>
        <InteractionsContainer>
          <Button>
            <Like source={like} />
          </Button>
          <Button>
            <Share source={share} />
          </Button>
        </InteractionsContainer>
      </InfoContainer>
      <DescriptionComponent desc={description} />
      <SellerInfo />

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
