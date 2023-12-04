import { extendTheme } from "native-base";
import { Platform } from "react-native";
import { appColor } from "./colors";

export const theme = extendTheme({
  colors: {
    primary: {
      50: appColor.primary,
      100: appColor.primary,
      200: appColor.primary,
      300: appColor.primary,
      400: appColor.primary,
      500: appColor.primary,
      600: appColor.primary,
      700: appColor.primary,
      800: appColor.primary,
      900: appColor.primary,
    },
  },
  fontConfig: {
    PlusJakartaSans: {
      200: {
        normal: Platform.select({
          android: "PlusJakartaSans-ExtraLight",
          ios: "Plus Jakarta Sans ExtraLight",
        }),
      },
      300: {
        normal: Platform.select({
          android: "PlusJakartaSans-Light",
          ios: "Plus Jakarta Sans Light",
        }),
      },
      400: {
        normal: Platform.select({
          android: "PlusJakartaSans-Regular",
          ios: "Plus Jakarta Sans Regular",
        }),
      },
      500: {
        normal: Platform.select({
          android: "PlusJakartaSans-Medium",
          ios: "Plus Jakarta Sans Medium",
        }),
      },
      600: {
        normal: Platform.select({
          android: "PlusJakartaSans-SemiBold",
          ios: "Plus Jakarta Sans SemiBold",
        }),
      },
      700: {
        normal: Platform.select({
          android: "PlusJakartaSans-Bold",
          ios: "Plus Jakarta Sans Bold",
        }),
      },
      800: {
        normal: Platform.select({
          android: "PlusJakartaSans-ExtraBold",
          ios: "Plus Jakarta Sans ExtraBold",
        }),
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "PlusJakartaSans",
    body: "PlusJakartaSans",
    display: "PlusJakartaSans",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});
