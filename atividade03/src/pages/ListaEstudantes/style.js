import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },

  content: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  buttons: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  button: {
    width: "50%",
    height: 60,
    backgroundColor: "#32b447",
    color: "#ffff",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});