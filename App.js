import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
      <Routes />
    </>
  );
}
