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

import { styles } from "./styles.js";
import { useEffect, useState, useCallback } from "react";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LoadingMap } from "../../components/LoadingMap";
import Linking from "expo-linking";
import { useFocusEffect } from "@react-navigation/native";
import MapView, { PROVIDER_DEFAULT, Marker } from "react-native-maps";

function Passenger() {
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

      requestLocation();
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor={"transparent"} translucent />
      <SafeAreaView style={[styles.container, { flex: 1 }]}>
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
              <View style={{ paddingHorizontal: 20, paddingTop: 16 }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 12,
                  }}
                >
                  Encontre a sua carona
                </Text>

                {[
                  { label: "Origem", icon: "location-outline" },
                  { label: "Destino", icon: "location-sharp" },
                  { label: "Motorista", icon: "person-circle-sharp" },
                ].map(({ label, icon }, idx) => (
                  <View key={idx} style={{ marginBottom: 12 }}>
                    <Text style={{ color: "#ccc", marginBottom: 6 }}>
                      {label}
                    </Text>
                    <View style={{ position: "relative" }}>
                      <TextInput
                        style={{
                          backgroundColor: "#1E1E1E",
                          borderRadius: 12,
                          paddingVertical: 12,
                          paddingHorizontal: 16,
                          paddingRight: 40,
                          color: "#fff",
                          fontSize: 16,
                          borderWidth: 1,
                          borderColor: "#333",
                        }}
                        placeholder={`Digite ${label.toLowerCase()}`}
                        placeholderTextColor="#888"
                      />
                      <Ionicons
                        name={icon}
                        size={22}
                        color="#F7D600"
                        style={{ position: "absolute", right: 12, top: 12 }}
                      />
                    </View>
                  </View>
                ))}

                <Button text="CONFIRMAR" />
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
}

export default Passenger;
