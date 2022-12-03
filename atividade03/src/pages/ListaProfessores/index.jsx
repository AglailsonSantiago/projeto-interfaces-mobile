import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";
import ProfessorService from "../../service/ProfessorService";
import Professor from "../../components/Professor";
import { db } from "../../config/firebase";

import { styles } from "./style";

export default function ListaProfessores({ navigation }) {
  const [professores, setProfessores] = useState([]);

  function listaProfessores() {
    ProfessorService.list(db, (professores) => {
      setProfessores(professores);
    });
  }

  useEffect(() => {
    listaProfessores();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>Professores Cadastrados</Text>
        <FlatList
          data={professores}
          renderItem={({ item }) => (
            <Professor
              name={item.name}
              id={item.id}
              professores={listaProfessores}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("CadastrarProfessor", {
                listaProfessores: listaProfessores,
              });
            }}
          >
            <Text style={styles.buttonText}>CADASTRAR</Text>
            <Ionicons
              name="md-person-add-sharp"
              size={18}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}