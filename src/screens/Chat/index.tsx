import React from "react";
import {
  Container,
  Input,
  InputContainer,
  SendButton,
  SendIcon,
} from "./styles";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import ChatHeader from "../../components/Chat/ChatHeader";
import MessageList from "../../components/Chat/MessageList";

type Props = NativeStackScreenProps<PropsNavigationStack, "Chat">;

const chatImage = require("../../../assets/icons/send.png");
const Chat = ({ route }: Props) => {
  return (
    <>
      <Container>
        <ChatHeader
          sellerName={route.params.sellerName}
          product={route.params.product}
          sellerId={route.params.sellerId}
        />
        <MessageList messages={route.params.messages} />
        <InputContainer>
          <Input
            placeholder="Digite sua mensagem"
            placeholderTextColor="white"
            multiline
          />
          <SendButton onPress={() => {}}>
            <SendIcon source={chatImage} />
          </SendButton>
        </InputContainer>
        <NavBar />
      </Container>
    </>
  );
};

export default Chat;
