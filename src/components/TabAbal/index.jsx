import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState("A");
  const [userType, setUserType] = useState("passageiro"); // ou "passageiro"

  const tabs = [
    {
      key: "A",
      label: "Perfil",
      icon: "user-circle",
      visibleTo: ["motorista", "passageiro"],
    },
    {
      key: "B",
      label: "Motorista",
      icon: "vcard",
      visibleTo: ["motorista"],
    },
    {
      key: "C",
      label: "Manutenção",
      icon: "gear",
      visibleTo: ["motorista"],
    },
    {
      key: "D",
      label: "Histórico",
      icon: "history",
      visibleTo: ["passageiro"],
    },
  ];

  const visibleTabs = tabs.filter((tab) => tab.visibleTo.includes(userType));

  return (
    <View style={styles.container}>
      {/* Abas */}
      <View style={styles.tabs}>
        {visibleTabs.map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            icon={tab.icon}
            isActive={activeTab === tab.key}
            onPress={() => setActiveTab(tab.key)}
          />
        ))}
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        {activeTab === "A" && (
          <Text style={styles.contentText}>👤 Conteúdo do Perfil (Aba A)</Text>
        )}
        {activeTab === "B" && userType === "motorista" && (
          <Text style={styles.contentText}>
            🚗 Conteúdo do Motorista (Aba B)
          </Text>
        )}
        {activeTab === "C" && userType === "motorista" && (
          <Text style={styles.contentText}>
            🛠️ Relatórios de Manutenção (Aba C)
          </Text>
        )}
        {activeTab === "D" && (
          <Text style={styles.contentText}>
            🛠️ Relatórios de Manutenção (Aba D)
          </Text>
        )}
      </View>
    </View>
  );
}

function TabButton({ label, icon, isActive, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabButton}>
      <FontAwesome
        name={icon}
        size={22}
        color={isActive ? "#f7d600" : "#888"}
        style={{ marginBottom: 4 }}
      />
      <Text style={[styles.tabText, isActive && styles.activeTabText]}>
        {label}
      </Text>
      {isActive && <View style={styles.tabIndicator} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#0D0D0D",
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,

    paddingVertical: 12,
    position: "relative",
  },
  tabText: {
    color: "#aaa",
    fontSize: 13,
    fontWeight: "500",
  },
  activeTabText: {
    color: "#f7d600",
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    height: 3,
    width: "60%",
    backgroundColor: "#f7d600",
    borderRadius: 2,
  },
  content: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  contentText: {
    color: "#ddd",
    fontSize: 16,
    lineHeight: 22,
  },
});
