import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { db } from "../../config/firebase";
import EstudanteService from "../../service/EstudanteService";

import { styles } from "./style";

export default function CadastrarEstudantes({ navigation, route }) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState(0);

  function cadastro() {
    EstudanteService.create(
      db,
      (id) => {
        alert(`Estudante ${id} inserido com sucesso!`);
        clear();
        navigation.navigate("ListaEstudantes");
      },
      { nome, curso, ira }
    );
    route.params.estudantes();
  }

  function clear() {
    setNome("");
    setCurso("");
    setIra(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRAR ESTUDANTE</Text>
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
        onPress={cadastro}
        disabled={nome === "" || curso === ""}
      >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}