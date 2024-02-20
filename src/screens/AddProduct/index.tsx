import React, { useState } from "react";
import {
  Container,
  DescriptionContainer,
  Division,
  Input,
  InputContainer,
} from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";
import DropDownComponent from "../../components/common/DropDownComponent";
import DefaultButton from "../../components/common/DefaultButton";
import UploadInput from "../../components/AddProduct/UploadInput";
import { ImagePickerAsset } from "expo-image-picker";

const Address = [
  { value: "Endereço 1" },
  { value: "Endereço 2" },
  { value: "Endereço 3" },
  { value: "Endereço 4" },
];

const Category = [
  { value: "Categoria 1" },
  { value: "Categoria 2" },
  { value: "Categoria 3" },
  { value: "Categoria 4" },
];

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState<ImagePickerAsset[]>([]);

  return (
    <Container contentContainerStyle={{ paddingBottom: 80, paddingTop: 10 }}>
      <DefaultTitle title="CADASTRO DO ANÚNCIO" fontSize={18} />

      <InputContainer>
        <Input placeholder="Título" />
      </InputContainer>

      <InputContainer>
        <Input placeholder="Preço" keyboardType="numeric" />
      </InputContainer>

      <DescriptionContainer>
        <Input placeholder="Descrição" />
      </DescriptionContainer>

      <UploadInput images={images} setImages={setImages} />

      <DropDownComponent
        data={Category}
        placeholder="Selecione Categoria..."
        setSelected={setCategory}
      />

      <DropDownComponent
        data={Address}
        placeholder="Selecione o endereço"
        setSelected={setAddress}
      />

      <DefaultButton
        buttonText="CADASTRAR E PUBLICAR"
        buttonHandle={() => {}}
        buttonType="primary"
        marginVertical={20}
      />

      <Division>ou</Division>

      <DefaultButton
        buttonText="SALVAR COMO RASCUNHO"
        buttonHandle={() => {}}
        buttonType="secondary"
        marginVertical={20}
      />
    </Container>
  );
};

export default AddProduct;
