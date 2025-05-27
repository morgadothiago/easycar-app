import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

import MaoLoading from "../../assets/mapAnimetion.json"; // Ensure this path is correct

export function LoadingMap() {
  return (
    <View style={styles.container}>
      <LottieView source={MaoLoading} autoPlay loop style={styles.lottie} />
      <Text style={styles.text}>Carregando o mapa...</Text>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: width * 0.5,
    height: width * 0.5,
  },
  text: {
    marginTop: 20,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
