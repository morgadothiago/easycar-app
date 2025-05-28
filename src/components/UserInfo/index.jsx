import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function UserInfo({ nome, email, cameraButton, lougOutButton }) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        {/* Área da esquerda: imagem e dados */}
        <View style={styles.userDataSection}>
          <TouchableOpacity onPress={cameraButton} style={styles.cameraBox}>
            <Feather name="user" size={24} color="#4e8ef7" />
          </TouchableOpacity>
          <View>
            <Text style={styles.userName}>{nome || "Nome do usuário"}</Text>
            <Text style={styles.userEmail}>{email || "email@exemplo.com"}</Text>
          </View>
        </View>

        {/* Área da direita: botões */}
        <View style={styles.buttonsSection}>
          <TouchableOpacity onPress={cameraButton} style={styles.iconButton}>
            <Feather name="camera" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={lougOutButton} style={styles.iconButton}>
            <Feather name="log-out" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  userDataSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cameraBox: {
    height: 50,
    width: 50,
    backgroundColor: "#e3e9f7",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontWeight: "600",
    fontSize: 16,
    color: "#333",
  },
  userEmail: {
    fontSize: 14,
    color: "#777",
  },
  buttonsSection: {
    flexDirection: "row",
    gap: 10,
  },
  iconButton: {
    backgroundColor: "#4e8ef7",
    padding: 10,
    borderRadius: 10,
  },
});
