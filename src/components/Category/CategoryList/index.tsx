import React from "react";
import { Product } from "../../../screens/AllCategories";
import { FlatList, ListRenderItem } from "react-native";
import { View } from "react-native";
import CategoryCard from "./CategoryCard";

interface Props {
  products: Product[];
}

const CategoryList = ({ products }: Props) => {
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <>
        <CategoryCard product={item} />
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
