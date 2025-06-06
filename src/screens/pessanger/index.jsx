import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "../../components/Button";
import MapView, { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import { styles } from "./styles.js";
import { useEffect, useState } from "react";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LoadingMap } from "../../components/LoadingMap";

import Linking from "expo-linking";

import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

function Passenger(props) {
  const [myLocation, setMyLocation] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const requestLocation = async () => {
        const { status } = await Location.getForegroundPermissionsAsync();

        if (status !== "granted") {
          const { status: newStatus } =
            await Location.requestForegroundPermissionsAsync();

          if (newStatus !== "granted") {
            Alert.alert(
              "Permissão necessária",
              "Você precisa permitir o acesso à localização para usar o app.",
              [
                { text: "Cancelar", style: "cancel" },
                {
                  text: "Abrir configurações",
                  onPress: () => Linking.openSettings(),
                },
              ]
            );
            return;
          }
        }

        const location = await Location.getCurrentPositionAsync({});
        setMyLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      };
      // Check if location services are enabled

      requestLocation();
    }, [myLocation])
  );

  return (
    <>
      <StatusBar backgroundColor={"#000"} />
      <SafeAreaView
        style={[styles.container, { backgroundColor: "#000", flex: 1 }]}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            {myLocation ? (
              <MapView
                style={styles.map}
                provider={PROVIDER_DEFAULT}
                initialRegion={{
                  latitude: myLocation.latitude,
                  longitude: myLocation.longitude,
                  latitudeDelta: 0.004,
                  longitudeDelta: 0.004,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: myLocation.latitude,
                    longitude: myLocation.longitude,
                  }}
                  title="Você está aqui"
                  description="Localização atual"
                  image={icons.location}
                  style={styles.marker}
                />
              </MapView>
            ) : (
              <View style={styles.map}>
                <LoadingMap />
              </View>
            )}

            <KeyboardAvoidingView
              style={styles.footer}
              behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
              <View style={styles.footerText}>
                <Text>Encontre a sua carona</Text>
              </View>

              <View style={styles.footerFields}>
                <Text>Origem</Text>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite seu destino"
                    placeholderTextColor={"#fff"}
                  />
                  <Ionicons
                    name="location-outline"
                    size={24}
                    color="#F7D600"
                    style={{ position: "absolute", right: 10, top: 10 }}
                  />
                </View>
              </View>

              <View style={styles.footerFields}>
                <Text>Destino</Text>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite seu destino"
                    placeholderTextColor={"#fff"}
                  />
                  <Ionicons
                    name="location-sharp"
                    size={24}
                    color="#F7D600"
                    style={{ position: "absolute", right: 10, top: 10 }}
                  />
                </View>
              </View>

              <View style={styles.footerFields}>
                <Text>Motorista</Text>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Digite seu destino"
                    placeholderTextColor={"#fff"}
                  />
                  <Ionicons
                    name="person-circle-sharp"
                    size={24}
                    color="#F7D600"
                    style={{ position: "absolute", right: 10, top: 10 }}
                  />
                </View>
              </View>

              <Button text="CONFIRMAR" />
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
}

export default Passenger;
