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
          sellerName={route.params.chatInfo.seller}
          product={route.params.chatInfo.product}
        />
        <MessageList messages={route.params.chatInfo.messages} />
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
