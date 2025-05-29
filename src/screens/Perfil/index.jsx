import { View, Text, StatusBar } from "react-native";
import { styles } from "./styles";
import UserInfo from "../../components/UserInfo";
import TabsExample from "../../components/TabAbal";

export default function Perfil() {
  const data = {
    nome: "thiago ",
    email: "email@exemplo.com",
    image: "https://avatars.githubusercontent.com/u/27393649?v=4",
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} translucent={false} />
      <UserInfo {...data} />

      <TabsExample />
    </View>
  );
}
