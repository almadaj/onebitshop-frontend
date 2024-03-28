import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import ProductList from "../../components/common/ProductList";
import productService from "../../services/productService";
import { PropsStack } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../entitites/Product";
import Loader from "../Loader";

const Home = () => {
  const navigation = useNavigation<PropsStack>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(100);
  const [products, setProducts] = useState<Product[]>([]);
  const handleGetProducts = async () => {
    if (products.length === total) {
      return;
    }
    const productsData = await productService.getAllProducts(page);
    setProducts([...products, ...productsData.products]);
    setTotal(productsData.total);
    setLoading(false);
    setPage(page + 1);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <Container>
      <Header />
      {!loading ? (
        <ProductList
          products={products}
          handleGetProducts={handleGetProducts}
        />
      ) : (
        <Loader />
      )}
      <NavBar />
    </Container>
  );
};

export default Home;
