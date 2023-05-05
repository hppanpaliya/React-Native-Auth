import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { logout } from "../API/auth";

const HomePageScreen = ({ onLogout, navigation }) => {
  const handleLogout = async () => {
    try {
      await logout();
      onLogout(); // Update login status in App component
      navigation.navigate("Login"); // Redirect to the Login screen
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page!</Text>
      <Text style={styles.subtitle}>You are logged in.</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#888",
  },
});

export default HomePageScreen;
