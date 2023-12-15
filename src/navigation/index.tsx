import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SCREEN_NAMES } from "../constants";
import { NativeBaseProvider } from "native-base";
import { theme } from "../constants/theme";
import AppIntro from "../screens/appintro";
import CreatePassword from "../screens/createpassword";
import Login from "../screens/login";
import OTP from "../screens/otp";
import Splash from "../screens/splash";
import Password from "../screens/password";
import PasswordSuccess from "../screens/passwordsuccess";
import Welcome from "../screens/welcome";
import FullName from "../screens/fullname";
import Birthday from "../screens/birthday";
import Designation from "../screens/designation";
import Dashboard from "./dashboard";
import Profiles from "../screens/profile";
import ProfileDetails from "../screens/profile/details";
import CreateProfileInfo from "../screens/createProfile/profileInfo";
import CreateBusinessInfo from "../screens/createProfile/businessInfo";
import CreateProfileStyle from "../screens/createProfile/profilestyle";

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
          <Stack.Screen name={SCREEN_NAMES.createpassword} component={CreatePassword} />
          <Stack.Screen name={SCREEN_NAMES.passwordsuccess} component={PasswordSuccess} />
          <Stack.Screen name={SCREEN_NAMES.welcome} component={Welcome} />
          <Stack.Screen name={SCREEN_NAMES.fullname} component={FullName} />
          <Stack.Screen name={SCREEN_NAMES.birthday} component={Birthday} />
          <Stack.Screen name={SCREEN_NAMES.designation} component={Designation} />
          <Stack.Screen name={SCREEN_NAMES.dashboard} component={Dashboard} />
          <Stack.Screen name={SCREEN_NAMES.profiles} component={Profiles} />
          <Stack.Screen name={SCREEN_NAMES.profileDetails} component={ProfileDetails} />
          <Stack.Screen name={SCREEN_NAMES.createProfileInfo} component={CreateProfileInfo} />
          <Stack.Screen name={SCREEN_NAMES.createBuisnessInfo} component={CreateBusinessInfo} />
          <Stack.Screen name={SCREEN_NAMES.createProfileStyles} component={CreateProfileStyle} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Navigation;
