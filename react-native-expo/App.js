import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomePageScreen from "./screens/HomePageScreen";

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Handle successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home">{(props) => <HomePageScreen {...props} onLogout={handleLogout} />}</Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login">{(props) => <LoginScreen {...props} onLogin={handleLogin} />}</Stack.Screen>
            <Stack.Screen name="Register">{(props) => <RegisterScreen {...props} onLogin={handleLogin} />}</Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
