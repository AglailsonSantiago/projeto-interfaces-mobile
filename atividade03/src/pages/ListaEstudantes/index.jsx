import { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-web";
import Estudante from "../../components/Estudante";
import EstudanteService from "../../service/EstudanteService";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../../config/firebase";

import { styles } from "./style";

export default function ListaEstudantes({ navigation }) {
  const [estudantes, setEstudantes] = useState([]);

  function listaEstudantes() {
    EstudanteService.list(db, (estudantes) => {
      setEstudantes(estudantes);
    });
  }

  useEffect(() => {
    listaEstudantes();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>ESTUDANTES CADASTRADOS</Text>
        <FlatList
          data={estudantes}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Estudante
                  name={item.nome}
                  id={item.id}
                  estudantes={listaEstudantes}
                  navigation={navigation}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("CadastrarEstudante", {
                estudantes: listaEstudantes,
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