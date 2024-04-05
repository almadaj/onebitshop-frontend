import React, { useState } from "react";
import { BtnImg, Container, EditBtn, EditBtnContainer } from "./styles";
import DisabledFields from "./DisabledFields";
import AbledFields from "./AbledFields";
import { User } from "../../../entitites/User";

const btnImg = require("../../../../assets/icons/edit.png");
interface Props {
  userInfo: User;
}
const Form = ({ userInfo }: Props) => {
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
      {!editable ? (
        <DisabledFields userInfo={userInfo} />
      ) : (
        <AbledFields userInfo={userInfo} />
      )}
    </Container>
  );
};

export default Form;
