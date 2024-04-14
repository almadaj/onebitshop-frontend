import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import MessageCard from "./MessageCard";
import { Messages } from "../../../entitites/Messages";

interface Props {
  messages: Messages[];
}

const MessagesList = ({ messages }: Props) => {
  const renderItem: ListRenderItem<Messages> = ({ item }) => (
    <>{<MessageCard item={item} />}</>
  );

  return (
    <FlatList
      data={messages}
      inverted
      keyExtractor={(item, index) => item._id + index.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 20 }}
    />
  );
};

export default MessagesList;
