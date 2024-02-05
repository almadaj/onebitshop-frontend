import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import ProductCard from "./ProductCard";

const like = require("../../../../assets/icons/like.png");
const liked = require("../../../../assets/icons/liked.png");

export interface ProductType {
  _id: string;
  productImage: string;
  price: string;
  name: string;
  publishedData: string;
  SellerName: string;
  liked: boolean;
}

const Data = [
  {
    _id: "1",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    name: "PlayStation 4 Pro",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
  {
    _id: "2",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Nintendo Switch",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: true,
  },
  {
    _id: "3",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "XBox One",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
  {
    _id: "4",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "PlayStation 3",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: true,
  },
  {
    _id: "5",
    productImage:
      "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Nintendo DSLite",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
  },
];

const ProductList = () => {
  const renderItem: ListRenderItem<ProductType> = ({ item }) => (
    <ProductCard data={item} />
  );
  return (
    <FlatList
      data={Data}
      keyExtractor={(item: ProductType) => item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    />
  );
};

export default ProductList;
