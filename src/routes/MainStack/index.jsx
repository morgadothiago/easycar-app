import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Passenger from "../../screens/pessanger";
import Drive from "../../screens/drive";
import Home from "../../screens/home";

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
