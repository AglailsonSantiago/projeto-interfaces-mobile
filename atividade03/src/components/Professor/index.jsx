import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { db } from "../../config/firebase";
import ProfessorService from "../../service/ProfessorService";

import { styles } from "./style";

export default function Professor({ navigation, name, id, professores }) {
  function deleteProfessor() {
    ProfessorService.delete(db, () => {}, id);
    professores();
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("DetalhesProfessor", { id: id });
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
              navigation.navigate("UpdateProfessor", {
                id: id,
                professores: professores,
              });
            }}
          >
            <FontAwesome5 name="user-edit" size={20} color="black" />
          </Pressable>
          <Pressable onPress={deleteProfessor}>
            <MaterialIcons name="delete" size={24} color="black" />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}