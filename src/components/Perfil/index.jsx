import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileButton() {
  const navigation = useNavigation();

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: "https://avatars.githubusercontent.com/u/27393649?v=4",
  };

  const hasProfilePicture = !!user.profilePicture;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Perfil", { user })}
      style={{ marginRight: 16 }}
    >
      {hasProfilePicture ? (
        <Image
          source={{ uri: user.profilePicture }}
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
          }}
        />
      ) : (
        <Ionicons name="person-circle-outline" size={28} color="#000" />
      )}
    </TouchableOpacity>
  );
}
