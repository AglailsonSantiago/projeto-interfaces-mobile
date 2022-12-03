import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../config/firebase";
import ProfessorService from "../../service/ProfessorService";

import { styles } from "./style";

export default function RegisterTeachers({ navigation, route }) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [salario, setSalario] = useState(0);

  function cadastrar() {
    ProfessorService.create(
      db,
      (id) => {
        alert(`Professor ${id} inserido com sucesso!`);
        clear();
        navigation.navigate("ListaProfessores");
      },
      { nome, curso, salario }
    );
    route.params.professores();
  }

  function clear() {
    setNome("");
    setCurso("");
    setSalario(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADICIONAR PROFESSOR</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContent}>
          <Text style={styles.name}>Nome: </Text>
          <TextInput
            placeholder="Digite o nome..."
            style={styles.input}
            onChangeText={(nome) => setNome(nome)}
            value={nome}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.name}>Curso: </Text>
          <TextInput
            placeholder="Digite seu curso..."
            style={styles.input}
            onChangeText={(curso) => setCurso(curso)}
            value={curso}
          />
        </View>

        <View style={styles.inputContent}>
          <Text style={styles.name}>Salário: </Text>
          <TextInput
            placeholder="Digite seu salário..."
            style={styles.input}
            onChangeText={(salario) => setSalario(salario)}
            keyboardType="numeric"
            value={salario}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={cadastrar}
        disabled={nome === "" || curso === ""}
      >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}