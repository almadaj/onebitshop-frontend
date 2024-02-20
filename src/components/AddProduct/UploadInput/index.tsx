import React, { SetStateAction } from "react";
import { Container, Icon, Title } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
const uploadImage = require("../../../../assets/icons/arrow-right.png");

interface ImagesProps {
  images: ImagePicker.ImagePickerAsset[];
  setImages: React.Dispatch<SetStateAction<ImagePicker.ImagePickerAsset[]>>;
}

const UploadInput = ({ images, setImages }: ImagesProps) => {
  const handlePickUpImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 6,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.assets) {
      setImages(result.assets);
    } else {
      Alert.alert("Você não selecionou nenhuma imagem");
    }
  };

  return (
    <>
      <Container onPress={handlePickUpImage}>
        <Title>Adicione até 6 fotos</Title>
        <Icon source={uploadImage} />
      </Container>
    </>
  );
};

export default UploadInput;
