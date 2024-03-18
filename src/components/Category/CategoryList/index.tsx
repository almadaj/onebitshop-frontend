import React from "react";

import { FlatList, ListRenderItem } from "react-native";
import CategoryCard from "./CategoryCard";
import { Product } from "../../../entitites/Product";

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
