import { Box, Text } from "../../components";
import React, { useEffect } from "react";
import { SCREEN_NAMES } from "../../constants";
import { height } from "../../constants/dimension";
import { AntroLogoSvg } from "../../assets/svg";
import { styles } from "./styles";

const Splash = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREEN_NAMES.appintro);
    }, 3000);

    return () => {};
  }, []);

  return (
    <Box flex={1}>
      <Box flex={0.9} justifyContent={"center"} alignItems={"center"}>
        <AntroLogoSvg />
      </Box>
      <Box flex={0.1}>
        <Text fontWeight={"medium"} style={styles.splashTxtTitle}>
          {"Antro"}
        </Text>
        <Text fontWeight={"normal"} style={styles.splashTxtDescription}>
          {"Your identiry assistance"}
        </Text>
      </Box>
    </Box>
  );
};

export default Splash;
