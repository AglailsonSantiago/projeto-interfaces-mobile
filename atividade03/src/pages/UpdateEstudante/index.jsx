import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import EstudanteService from "../../service/EstudanteService";
import { db } from "../../config/firebase";

import { styles } from "./style";

export default function UpdateEstudante({ route, navigation }) {
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

  function updateEstudante() {
    EstudanteService.update(
      db,
      () => {
        alert("Estudante atualizado com sucesso!");
        navigation.navigate("ListaEstudantes");
      },
      estudanteId,
      { nome, curso, ira }
    );
    route.params.estudantes()
  }

  useEffect(() => {
    getEstudante();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ATUALIZAR ESTUDANTE</Text>
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
          <Text style={styles.name}>Ira: </Text>
          <TextInput
            placeholder="Digite seu ira..."
            style={styles.input}
            onChangeText={(ira) => setIra(ira)}
            keyboardType="numeric"
            value={ira}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={updateEstudante}
        disabled={nome === "" || curso === ""}
      >
        <Text style={styles.buttonText}>ATUALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}