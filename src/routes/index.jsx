import { NavigationContainer } from "@react-navigation/native";

import AppRouter from "./MainStack";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}
