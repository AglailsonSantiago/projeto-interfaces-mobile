
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Routes from "./src/routes.jsx";
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
