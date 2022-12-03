import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import ProfessorService from "../../service/ProfessorService";
import { db } from "../../config/firebase";

import { styles } from "./style";

export default function UpdateProfessor({ navigation, route }) {
  const [nome, setNome] = useState(route.params.nome);
  const [curso, setCurso] = useState(route.params.curso);
  const [salario, setSalario] = useState(route.params.salario);
  const professorId = route.params.id;

  function getProfessor() {
    ProfessorService.getProfessor(
      db,
      (professor) => {
        setNome(professor.nome),
        setCurso(professor.curso),
        setSalario(professor.salario);
      },
      professorId
    );
  }

  function updateProfessor() {
    ProfessorService.update(
      db,
      () => {
        alert("Professor atualizado com sucesso!");
        navigation.navigate("ListaProfessores");
      },
      professorId,
      { nome, curso, salario }
    );
    route.params.professores();
  }

  useEffect(() => {
    getProfessor();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ATUALIZAR PROFESSOR</Text>
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
        onPress={updateProfessor}
        disabled={nome === "" || curso === ""}
      >
        <Text style={styles.buttonText}>ATUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}