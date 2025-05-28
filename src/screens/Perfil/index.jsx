import { View, Text, StatusBar } from "react-native";
import { styles } from "./styles";
import UserInfo from "../../components/UserInfo";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} translucent={false} />
      <UserInfo />
    </View>
  );
}
