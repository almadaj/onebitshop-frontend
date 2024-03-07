import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import { Container } from "./styles";
import React from "react";

const AllChats = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="CONVERSAS" fontSize={20} />
      </Container>
      <NavBar />
    </>
  );
};

export default AllChats;
