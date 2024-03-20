import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import { myTheme } from "./src/styles";
import { ThemeProvider } from "styled-components/native";
import ErrorBoundary from "./src/components/Error";
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <ErrorBoundary>
      <AuthContextProvider>
        <StatusBar style="light" />
        <ThemeProvider theme={myTheme}>
          <Routes />
        </ThemeProvider>
      </AuthContextProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
