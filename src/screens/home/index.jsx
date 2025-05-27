import { Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import icons from "../../constants/icons.js";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function OpenPassenger() {
    navigation.navigate("Passenger");
  }

  function OpenRide() {
    navigation.navigate("Drive");
  }

  return (
    <ImageBackground source={icons.bg} style={styles.bg} resizeMode="cover">
      <Image source={icons.logo} style={styles.logo} />

      <TouchableOpacity style={styles.btn} onPress={OpenPassenger}>
        <Image source={icons.passenger} style={styles.img} />
        <Text style={styles.title}>Passageiro</Text>
        <Text style={styles.text}>Encontre uma carona para você</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={OpenRide}>
        <Image source={icons.driver} style={styles.img} />
        <Text style={styles.title}>Motorista</Text>
        <Text style={styles.text}>Encontre um passageiro para você</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
