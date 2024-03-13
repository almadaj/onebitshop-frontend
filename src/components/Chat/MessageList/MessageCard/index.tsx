import React from "react";
import {
  ReceiverMsg,
  ReceiverMsgContainer,
  SenderMsg,
  SenderMsgContainer,
} from "./styles";

const MessageCard = ({ item }: any) => {
  return (
    <>
      {item.reciver === "seller" ? (
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
