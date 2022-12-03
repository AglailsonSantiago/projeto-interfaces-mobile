import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import EstudanteService from "../../service/EstudanteService";
import { FontAwesome5 } from "@expo/vector-icons";
import { db } from "../../config/firebase";

import { styles } from "./style";

export default function DetalhesEstudante({ route }) {
  const [nome, setNome] = useState(route.params.nome);
  const [curso, setCurso] = useState(route.params.curso);
  const [ira, setIra] = useState(route.params.ira);
  const estudanteId = route.params.id;

  function getEstudante() {
    EstudanteService.getEstudante(
      db,
      (estudante) => {
        setNome(estudante.nome), setCurso(estudante.curso), setIra(estudante.ira);
      },
      estudanteId
    );
  }

  useEffect(() => {
    getEstudante();
  }, []);

  return (
    <View style={styles.container}>
      <FontAwesome5
        name="user-graduate"
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
        <strong>IRA:</strong> {ira}
      </Text>
    </View>
  );
}