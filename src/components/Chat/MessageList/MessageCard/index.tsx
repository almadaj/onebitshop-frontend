import React, { useEffect, useState } from "react";
import {
  ReceiverMsg,
  ReceiverMsgContainer,
  SenderMsg,
  SenderMsgContainer,
} from "./styles";
import { Messages } from "../../../../entitites/Messages";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  item: Messages;
}

const MessageCard = ({ item }: Props) => {
  const [senderId, setSenderId] = useState("");

  const handleGetUser = async () => {
    const user = await AsyncStorage.getItem("user");
    const { _id } = JSON.parse(user || "");

    setSenderId(_id);
  };

  useEffect(() => {
    handleGetUser();
  }, []);
  return (
    <>
      {item.sender === senderId ? (
        <SenderMsgContainer>
          <SenderMsg>{item.content}</SenderMsg>
        </SenderMsgContainer>
      ) : (
        <ReceiverMsgContainer>
          <ReceiverMsg>{item.content}</ReceiverMsg>
        </ReceiverMsgContainer>
      )}
    </>
  );
};

export default MessageCard;
