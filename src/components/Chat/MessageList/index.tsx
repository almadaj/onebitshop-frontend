import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import MessageCard from "./MessageCard";

const MessagesList = ({ messages }: any) => {
  const renderItem: ListRenderItem<any> = ({ item }) => (
    <>{<MessageCard item={item} />}</>
  );

  return (
    <FlatList
      data={messages}
      inverted
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 20 }}
    />
  );
};

export default MessagesList;
