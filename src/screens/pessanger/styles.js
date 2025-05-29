import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  map: {
    flex: 1,
    width: "100%",
  },
  marker: {
    width: 60,
    height: 60,
  },
  footer: {
    backgroundColor: "#121212",
    paddingBottom: 20,
    paddingTop: 10,
  },
  footerText: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  footerFields: {
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingRight: 44,
    color: "#FFFFFF",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});
