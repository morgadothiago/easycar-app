import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/men/41.jpg"
  );
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const user = {
    name: "João Silva",
    email: "joao.silva@example.com",
    bio: "Desenvolvedor apaixonado por tecnologia e inovação.",
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const confirmImageChange = (newImageUri) => {
    Alert.alert(
      "Confirmar Alteração",
      "Deseja realmente alterar sua foto de perfil?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => setProfileImage(newImageUri),
        },
      ],
      { cancelable: true }
    );
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "Permissão para acessar a galeria é necessária!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const newImageUri = result.assets[0].uri;
      confirmImageChange(newImageUri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={pickImage}
          >
            <Animated.Image
              source={{ uri: profileImage }}
              style={[styles.avatar, { transform: [{ scale: scaleAnim }] }]}
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
            <MaterialIcons name="camera-alt" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="edit" size={24} color="#fff" />
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="settings" size={24} color="#fff" />
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#f2f2f2",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    alignContent: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  editIcon: {
    position: "absolute",
    bottom: 15,
    right: 0,
    backgroundColor: "#4e8ef7",
    borderRadius: 15,
    padding: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4e8ef7",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 16,
  },
});

export default ProfileScreen;
