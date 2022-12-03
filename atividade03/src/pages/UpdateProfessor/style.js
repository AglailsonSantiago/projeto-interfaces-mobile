import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  inputsContainer: {
    width: "100%",
    marginTop: 30,
    display: "flex",
    gap: "15px",
  },

  title: {
    fontSize: "24px",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },

  name: {
    fontSize: "16px",
    marginBottom: 3,
  },

  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#ccc3",
    padding: "5%",
    borderRadius: "5px",
    marginBottom: 25,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#32b447",
    color: "#ffff",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});