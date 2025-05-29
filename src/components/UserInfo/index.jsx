import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function UserInfo({
  nome,
  email,
  cameraButton,
  lougOutButton,
  image,
  data,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Esquerda: Avatar + dados */}
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={cameraButton} style={styles.avatar}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 56, height: 56, borderRadius: 28 }}
              />
            ) : (
              <Feather name="user" size={24} color="#fff" />
            )}
          </TouchableOpacity>
          <View>
            <Text style={styles.name}>:{nome || ":Usuário Exemplo"}</Text>
            <Text style={styles.email}>{email || ":email@exemplo.com"}</Text>
          </View>
        </View>

        {/* Direita: Ações */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={cameraButton} style={styles.actionBtn}>
            <Feather name="camera" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={lougOutButton}
            style={[styles.actionBtn, styles.logout]}
          >
            <Feather name="log-out" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#101010",
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  email: {
    fontSize: 13,
    color: "#B0B0B0",
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  actionBtn: {
    width: 42,
    height: 42,
    backgroundColor: "#6C9CFF",
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  logout: {
    backgroundColor: "#FF5C5C",
  },
});
