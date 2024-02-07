import React from "react";
import { BtnImg, Container, EditBtn, EditBtnContainer } from "./styles";
import { Alert } from "react-native";
import DisabledFields from "./DisabledFields";

const btnImg = require("../../../../assets/icons/edit.png");

const Form = () => {
  return (
    <Container>
      <EditBtnContainer>
        <EditBtn
          onPress={() => {
            Alert.alert("Modificar");
          }}
        >
          <BtnImg source={btnImg} />
        </EditBtn>
      </EditBtnContainer>
      <DisabledFields />
    </Container>
  );
};

export default Form;
