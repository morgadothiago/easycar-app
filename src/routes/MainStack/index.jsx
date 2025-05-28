import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Passenger from "../../screens/pessanger";
import Drive from "../../screens/drive";
import Home from "../../screens/home";

import ProfileButton from "../../components/Perfil";
import Perfil from "../../screens/Perfil";

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => <ProfileButton navigation={navigation} />,
      })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Passenger"
        component={Passenger}
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Drive"
        component={Drive}
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShadowVisible: false,
          headerTitle: "Perfil",
          headerTransparent: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#F7D600",
          },
        }}
      />
    </Stack.Navigator>
  );
}
