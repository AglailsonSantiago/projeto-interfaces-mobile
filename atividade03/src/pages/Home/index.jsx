import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./style";

export default function HomePage({ navigation }) {
  function listarEstudante() {
    navigation.navigate("ListaEstudantes");
  }

  function listarProfessor() {
    navigation.navigate("ListaProfessores");
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name="logo-firebase"
        size={250}
        color="#f7c630"
        style={styles.icon}
      />
      <TouchableOpacity style={styles.button} onPress={listarEstudante}>
        <Text style={styles.buttonText}>Estudantes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={listarProfessor}>
        <Text style={styles.buttonText}>Professores</Text>
      </TouchableOpacity>
    </View>
  );
}