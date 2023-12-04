import { StyleSheet } from "react-native";
import { height, width } from "../../constants/dimension";
import { appColor } from "../../constants/colors";

export const styles = StyleSheet.create({
  appIntroImg: {
    height: width * 0.7,
    width: width * 0.7,
  },
  appIntroTxtTitle: {
    fontSize: height / 20.5,
    lineHeight: height / 16.5,
    color: "#0A1127",
  },
  appIntroTxtDescription: {
    fontSize: height / 54,
    lineHeight: height / 43,
    marginTop: height / 48,
    color: "#0A1127",
  },
  appIntroBtn: {
    color: appColor.white,
    paddingHorizontal: height / 100,
    fontSize: height / 54,
  },
});
