import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./style";

export default function HomePage({ navigation }) {
  function cadastrarEstudante() {
    navigation.navigate("ListaEstudantes");
  }

  function cadastrarProfessor() {
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
      <TouchableOpacity style={styles.button} onPress={cadastrarEstudante}>
        <Text style={styles.buttonText}>Estudantes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={cadastrarProfessor}>
        <Text style={styles.buttonText}>Professores</Text>
      </TouchableOpacity>
    </View>
  );
}