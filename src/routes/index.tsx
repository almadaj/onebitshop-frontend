import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Search from "../screens/Search";
import UserProfile from "../screens/UserProfile";
import SellerProfile from "../screens/SellerProfile";
import AllAddress from "../screens/AllAddress";
import AddAddress from "../screens/AddAddress";
import AddProduct from "../screens/AddProduct";
import Categories from "../screens/AllCategories";
import Category from "../screens/Category";
import ProductScreen from "../screens/Product";
import Denounce from "../screens/Denounce";
import Feedback from "../screens/Feedback";
import AllChats from "../screens/AllChats";
import Chat from "../screens/Chat";
import { Product } from "../entitites/Product";
import useAuth from "../hook/useAuth";

export type PropsNavigationStack = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Search: {
    query: string;
  };
  UserProfile: undefined;
  SellerProfile: undefined;
  AllAddress: {
    newAddress: boolean;
  };
  AddAddress: undefined;
  AddProduct: undefined;
  AllCategories: undefined;
  Category: { _id: string; product: Product[] };
  Product: undefined;
  Denounce: undefined;
  Feedback: undefined;
  AllChats: undefined;
  Chat: {
    chatInfo: any;
  };
};

const Stack = createNativeStackNavigator<PropsNavigationStack>();
export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;

const Routes = () => {
  const { token } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {token === null ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="SellerProfile" component={SellerProfile} />
            <Stack.Screen name="AllCategories" component={Categories} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Product" component={ProductScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="SellerProfile" component={SellerProfile} />
            <Stack.Screen name="AllCategories" component={Categories} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="AllChats" component={AllChats} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="AddProduct" component={AddProduct} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="Denounce" component={Denounce} />
            <Stack.Screen name="AddAddress" component={AddAddress} />
            <Stack.Screen name="AllAddress" component={AllAddress} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
