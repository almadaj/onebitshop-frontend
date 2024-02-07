import React, { useState } from "react";
import { BtnImg, Container, EditBtn, EditBtnContainer } from "./styles";
import DisabledFields from "./DisabledFields";
import AbledFields from "./AbledFields";

const btnImg = require("../../../../assets/icons/edit.png");

const Form = () => {
  const [editable, setEditable] = useState(false);
  const handleToggleEditable = () => {
    setEditable(!editable);
  };
  return (
    <Container>
      <EditBtnContainer>
        <EditBtn onPress={handleToggleEditable}>
          <BtnImg source={btnImg} />
        </EditBtn>
      </EditBtnContainer>
      {!editable ? <DisabledFields /> : <AbledFields />}
    </Container>
  );
};

export default Form;
