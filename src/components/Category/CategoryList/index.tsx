import React from "react";
import { Product } from "../../../screens/AllCategories";
import { FlatList, ListRenderItem } from "react-native";
import { View } from "react-native";

interface Props {
  products: Product[];
}

const CategoryList = ({ products }: Props) => {
  const renderItem: ListRenderItem<Product> = () => {
    return (
      <>
        <View></View>
      </>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoryList;
