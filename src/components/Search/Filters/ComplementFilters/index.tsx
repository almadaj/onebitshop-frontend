import React, { useState } from "react";

import {
  ApplyButton,
  ButtonsContainer,
  ButtonText,
  CleanButton,
  Container,
  Input,
  LocationInputContainer,
  PriceContainer,
  PriceInputContainer,
  Title,
} from "./styles";
import DropDownComponent from "../../../common/DropDownComponent";

const Category = [
  { value: "Eletrônicos" },
  { value: "Eletrodomésticos" },
  { value: "Moda e Acessórios" },
  { value: "Pets" },
  { value: "Brinquedos e Jogos" },
  { value: "Casa e Jardim" },
  { value: "Esporte e Lazer" },
  { value: "Automóveis e Veículos" },
];

const ComplementFilters = () => {
  const [category, setCategory] = useState("");

  return (
    <Container>
      <Title>VALOR</Title>
      <PriceContainer>
        <PriceInputContainer>
          <Input
            placeholder="mínimo"
            placeholderTextColor="white"
            keyboardType="numeric"
            style={{
              textAlign: "center",
            }}
          />
        </PriceInputContainer>
        <PriceInputContainer>
          <Input
            placeholder="máximo"
            placeholderTextColor="white"
            keyboardType="numeric"
            style={{
              textAlign: "center",
            }}
          />
        </PriceInputContainer>
      </PriceContainer>
      <Title>LOCALIZAÇÃO</Title>
      <LocationInputContainer>
        <Input
          placeholder="Bairro, Cidade e/ou Estado"
          placeholderTextColor="white"
        />
      </LocationInputContainer>
      <Title>CATEGORIA</Title>
      <DropDownComponent
        data={Category}
        placeholder="Selecione a categoria"
        setSelected={setCategory}
        saveMethod="value"
      />
      <ButtonsContainer>
        <CleanButton onPress={() => {}}>
          <ButtonText>LIMPAR</ButtonText>
        </CleanButton>
        <ApplyButton onPress={() => {}}>
          <ButtonText>APLICAR</ButtonText>
        </ApplyButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ComplementFilters;
