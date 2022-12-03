import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { db } from "../../config/firebase";
import ProfessorService from "../../service/ProfessorService";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./style";

export default function DetalhesProfessor({ route }) {
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

  useEffect(() => {
    getProfessor();
  }, []);

  return (
    <View style={styles.container}>
      <FontAwesome5
        name="user-tie"
        size={150}
        color="black"
        style={styles.icon}
      />
      <Text style={styles.text}>
        <strong>Nome:</strong> {nome}
      </Text>
      <Text style={styles.text}>
        <strong>Curso:</strong> {curso}
      </Text>
      <Text style={styles.text}>
        <strong>Salário:</strong>{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(salario)}
      </Text>
    </View>
  );
}