import React, { useEffect, useState } from "react";
import { Container, NoResult } from "./styles";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import ProductList from "../../components/common/ProductList";
import { Product } from "../../entitites/Product";
import searchService from "../../services/searchService";
import Loader from "../Loader";

type Props = NativeStackScreenProps<PropsNavigationStack, "Search">;

const Search = ({ route }: Props) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const query = route?.params.query;

  const handleSearch = async () => {
    const { data } = await searchService.getSearchedProducts(query);

    setData(data?.products);
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <Container>
      <Header />
      {!loading ? (
        data.length <= 0 ? (
          <NoResult>Sua pesquisa não corresponde a nenhum produto</NoResult>
        ) : (
          <ProductList handleGetProducts={handleSearch} products={data} />
        )
      ) : (
        <Loader />
      )}
      <NavBar />
    </Container>
  );
};

export default Search;
