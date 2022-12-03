import { Pressable, Text, View } from "react-native";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import EstudanteService from "../../service/EstudanteService";
import { db } from "../../config/firebase";

import { styles } from "./style";

export default function Estudante({ navigation, name, id, estudantes }) {
  function deleteEstudante() {
    EstudanteService.delete(db, () => {}, id);
    estudantes();
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("DetalhesEstudante", { id: id });
        }}
        style={styles.containerBtn}
      >
        <View style={styles.infoContainer}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.info}>{name}</Text>
        </View>
        <View style={styles.actions}>
          <Pressable
            style={styles.editBtn}
            onPress={() => {
              navigation.navigate("UpdateEstudante", {
                id: id,
                estudantes: estudantes,
              });
            }}
          >
            <FontAwesome5 name="user-edit" size={20} color="black" />
          </Pressable>
          <Pressable onPress={deleteEstudante}>
            <MaterialIcons name="delete" size={24} color="black" />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}