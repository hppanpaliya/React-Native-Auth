import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { register } from "../API/auth";

const RegisterScreen = ({ navigation, onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await register(username, password);
      // Handle successful registration
      console.log(response);
      onRegister(); // Update login status in App component
      // No need to show a toast message
    } catch (error) {
      // Handle registration error
      console.log(error);
      if (error) {
        setErrorMessage(error.toString());
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    }
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Ionicons name="person-add-outline" size={100} color="#555" style={styles.icon} />
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
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
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#007bff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#007bff",
    marginTop: 10,
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default RegisterScreen;
