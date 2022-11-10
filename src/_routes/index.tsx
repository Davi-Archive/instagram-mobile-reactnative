import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../_screens/Login";
import Register from "../_screens/Register";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Routes;