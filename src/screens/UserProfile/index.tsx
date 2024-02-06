import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import NavBar from "../../components/common/NavBar";

const UserProfile = () => {
  return (
    <>
      <Container>
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
          User Profile
        </Text>
      </Container>
      <NavBar />
    </>
  );
};

export default UserProfile;
