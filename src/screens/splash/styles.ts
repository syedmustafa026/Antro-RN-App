import { StyleSheet } from "react-native";
import { height } from "../../constants/dimension";

export const styles = StyleSheet.create({
  splashTxtTitle: {
    fontSize: Math.round(height / 27),
    color: "#191919",
    lineHeight: height / 22.5,
    textAlign: "center",
  },
  splashTxtDescription: {
    color: "#191919",
    textAlign: "center",
    marginTop: height / 200,
  },
});
