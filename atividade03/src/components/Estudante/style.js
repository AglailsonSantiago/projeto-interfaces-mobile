import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ccc9",
    width: 350,
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  containerBtn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  info: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },

  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  editBtn: {
    marginRight: 10,
  },
});