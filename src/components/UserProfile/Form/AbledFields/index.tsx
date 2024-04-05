import React, { useEffect, useState } from "react";
import { Input } from "./styles";
import { InputContainer } from "../styles";
import { Alert } from "react-native";
import DefaultButton from "../../../common/DefaultButton";
import DropDownComponent from "../../../common/DropDownComponent";
import { Address, User } from "../../../../entitites/User";
import addressService from "../../../../services/addressService";
import Loader from "../../../../screens/Loader";
import profileService from "../../../../services/profileService";
import useAuth from "../../../../hook/useAuth";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";

interface Props {
  userInfo: User;
}

const AbledFields = ({ userInfo }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const [select, setSelect] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(true);

  const { logout } = useAuth();
  const handleSetInfos = async () => {
    const res = await addressService.getAddress();

    const value = res.data.map((address: Address) => {
      return { value: `${address.street} Nº${address.number}`, disabled: true };
    });

    setAddress(value);
    setFields({
      ...fields,
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
    });
  };
  const handleUpdateInfo = async () => {
    const res = await profileService.updateUserProfile(fields);

    if (res.status === 400) {
      Alert.alert("Esse email pertence a outra conta");
      return;
    }

    if (fields.email !== userInfo.email) {
      logout();
    }
    navigation.navigate("Home");
    Alert.alert("Informações atualizadas com sucesso!");
  };
  useEffect(() => {
    handleSetInfos();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <InputContainer>
            <Input
              value={fields.name}
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  name: val,
                });
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input
              value={fields.email}
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  email: val,
                });
              }}
            />
          </InputContainer>
          <InputContainer>
            <Input
              value={fields.phone}
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  phone: val,
                });
              }}
            />
          </InputContainer>
          {/* <DropDownComponent
        placeholder={"Meus Endereços"}
        setSelected={setSelect}
        data={Data}
        saveMethod="value"
      /> */}
          <InputContainer>
            <Input
              placeholder="Senha"
              placeholderTextColor="#C0C0C1"
              secureTextEntry
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  currentPassword: val,
                });
              }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Nova Senha"
              placeholderTextColor="#C0C0C1"
              secureTextEntry
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  newPassword: val,
                });
              }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              placeholder="Confirmar Nova Senha"
              placeholderTextColor="#C0C0C1"
              secureTextEntry
              onChangeText={(val) => {
                setFields({
                  ...fields,
                  confirmNewPassword: val,
                });
              }}
            ></Input>
          </InputContainer>

          <DefaultButton
            buttonText={"Salvar Alterações"}
            buttonType={"primary"}
            marginVertical={10}
            buttonHandle={handleUpdateInfo}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AbledFields;
