import React from "react";
import { Container } from "./styles";
import NavBar from "../../components/common/NavBar";
import DefaultTitle from "../../components/common/DefaultTitle";

const AllAddress = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="Ver todos endereços" fontSize={18} />
      </Container>
      <NavBar />
    </>
  );
};

export default AllAddress;
