import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SCREEN_NAMES } from "../constants";
import { NativeBaseProvider } from "native-base";
import { theme } from "../constants/theme";
import {
  AppIntro,
  Birthday,
  CreatePassword,
  Designation,
  FullName,
  Login,
  OTP,
  Password,
  PasswordSuccess,
  Splash,
  Welcome,
  Dashboard,
  Profiles,
} from "../screens";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREEN_NAMES.dashboard}
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name={SCREEN_NAMES.splash} component={Splash} />
          <Stack.Screen name={SCREEN_NAMES.appintro} component={AppIntro} />
          <Stack.Screen name={SCREEN_NAMES.login} component={Login} />
          <Stack.Screen name={SCREEN_NAMES.password} component={Password} />
          <Stack.Screen name={SCREEN_NAMES.otp} component={OTP} />
          <Stack.Screen
            name={SCREEN_NAMES.createpassword}
            component={CreatePassword}
          />
          <Stack.Screen
            name={SCREEN_NAMES.passwordsuccess}
            component={PasswordSuccess}
          />
          <Stack.Screen name={SCREEN_NAMES.welcome} component={Welcome} />
          <Stack.Screen name={SCREEN_NAMES.fullname} component={FullName} />
          <Stack.Screen name={SCREEN_NAMES.birthday} component={Birthday} />
          <Stack.Screen name={SCREEN_NAMES.designation} component={Designation}
          />
          <Stack.Screen name={SCREEN_NAMES.dashboard} component={Dashboard}
          />
          <Stack.Screen name={SCREEN_NAMES.profiles} component={Profiles}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Navigation;
