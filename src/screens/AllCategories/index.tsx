import React from "react";
import { Container } from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import CategoryList from "../../components/Categories/CategoryList";
import { Product } from "../../entitites/Product";

export interface Category {
  category: {
    _id: string;
    product: Product[];
  };
}

const Data = [
  {
    category: {
      _id: "Eletrônicos",
      product: [
        {
          id: "1",
          productImage:
            "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
          price: "2600",
          title: "Playstation 4 novo com 3 jogos acompanhando",
          publishedData: "14/02/23",
        },
        {
          id: "2",
          productImage:
            "https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
          price: "2600",
          title: "Playstation 5 novo com 1 jogo acompanhando",
          publishedData: "14/02/23",
        },
        {
          id: "3",
          productImage:
            "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
          price: "2600",
          title: "Playstation 4 novo com 2 jogos acompanhando",
          publishedData: "14/02/23",
        },
      ],
    },
  },
  {
    category: {
      _id: "Pets",
      product: [
        {
          id: "1",
          productImage:
            "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
          price: "2600",
          title: "Playstation 4 novo com 3 jogos acompanhando",
          publishedData: "14/02/23",
        },
        {
          id: "2",
          productImage:
            "https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
          price: "2600",
          title: "Playstation 5 novo com 1 jogo acompanhando",
          publishedData: "14/02/23",
        },
        {
          id: "3",
          productImage:
            "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
          price: "2600",
          title: "Playstation 4 novo com 2 jogos acompanhando",
          publishedData: "14/02/23",
        },
      ],
    },
  },
  {
    category: {
      _id: "Móveis",
      product: [
        {
          id: "1",
          productImage:
            "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
          price: "2600",
          title: "Playstation 4 novo com 3 jogos acompanhando",
          publishedData: "14/02/23",
        },
        {
          id: "2",
          productImage:
            "https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
          price: "2600",
          title: "Playstation 5 novo com 1 jogo acompanhando",
          publishedData: "14/02/23",
        },
        {
          id: "3",
          productImage:
            "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
          price: "2600",
          title: "Playstation 4 novo com 2 jogos acompanhando",
          publishedData: "14/02/23",
        },
      ],
    },
  },
];

const AllCategories = () => {
  return (
    <>
      <Container contentContainerStyle={{ paddingBottom: 100 }}>
        <DefaultTitle title="TODAS AS CATEGORIAS" fontSize={20} />
        {/* @ts-ignore */}
        {Data.map(({ category }: Category) => (
          <CategoryList key={category._id} category={category} />
        ))}
      </Container>
      <NavBar />
    </>
  );
};

export default AllCategories;
