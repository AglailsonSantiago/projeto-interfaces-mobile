import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import ListaEstudantes from "./pages/ListaEstudantes";
import ListaProfessores from "./pages/ListaProfessores";
import CadastrarEstudante from "./pages/CadastrarEstudante";
import CadastrarProfessor from "./pages/CadastrarProfessor";
import DetalhesEstudante from "./pages/DetalhesEstudante";
import DetalhesProfessor from "./pages/DetalhesProfessor";
import UpdateEstudante from "./pages/UpdateEstudante";
import UpdateProfessor from "./pages/UpdateProfessor";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{ title: "Início" }}
      />
      <Stack.Screen
        name="CadastrarEstudante"
        component={CadastrarEstudante}
        options={{ title: "Cadastrar Estudantes" }}
      />

      <Stack.Screen
        name="CadastrarProfessor"
        component={CadastrarProfessor}
        options={{ title: "Cadastrar Professores" }}
      />

      <Stack.Screen
        name="ListaEstudantes"
        component={ListaEstudantes}
        options={{ title: "Estudantes" }}
      />

      <Stack.Screen
        name="ListaProfessores"
        component={ListaProfessores}
        options={{ title: "Professores" }}
      />

      <Stack.Screen
        name="UpdateEstudante"
        component={UpdateEstudante}
        options={{ title: "Atualizar Estudante" }}
      />

      <Stack.Screen
        name="UpdateProfessor"
        component={UpdateProfessor}
        options={{ title: "Atualizar Professor" }}
      />

      <Stack.Screen
        name="DetalhesEstudante"
        component={DetalhesEstudante}
        options={{ title: "Detalhes" }}
      />

      <Stack.Screen
        name="DetalhesProfessor"
        component={DetalhesProfessor}
        options={{ title: "Detalhes" }}
      />
    </Stack.Navigator>
  );
}