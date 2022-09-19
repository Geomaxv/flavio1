import { StyleSheet, View, Text } from "react-native";
import Localizacao from "../componentes/Localizacao";
import Previdiaria from "../componentes/previdiaria"
export default function Login() {
  return (
    <View style={styles.container}>
      <Localizacao></Localizacao>
      <Text style={{fontSize: 23, color: "white", fontWeight: "bold", marginTop: 30, marginBottom: 30, }}>Next 7 Days</Text>
      <Previdiaria></Previdiaria>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#427BFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
