import React from "react";
import { Box, Button, Text } from "../../components";
import { SuccessMark } from "../../assets/svg";
import { appStyles } from "../../styles";
import { appColor } from "../../constants/colors";
import { SCREEN_NAMES } from "../../constants";
import { width } from "../../constants/dimension";

const PasswordSuccess = ({ navigation }: any) => {
  const btnContinueHandler = () => {
    navigation.navigate(SCREEN_NAMES.welcome);
  };

  return (
    <Box flex={1} justifyContent={"center"} px={"8"}>
      <Box alignItems={"center"}>
        <SuccessMark />
      </Box>
      <Box style={appStyles.marginTop}>
        <Text fontWeight={"bold"} fontSize={"26"} textAlign={"center"}>
          {"Password Changed!"}
        </Text>
        <Text
          width={width * 0.8}
          color={"#8391A1"}
          fontWeight={"medium"}
          textAlign={"center"}
        >
          {"Your password has been changed successfully."}
        </Text>
      </Box>
      <Box style={appStyles.marginTop}>
        <Button onPress={btnContinueHandler}>
          <Text
            color={appColor.white}
            style={appStyles.btn}
            fontWeight={"semibold"}
          >
            {"Continue to Antro"}
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default PasswordSuccess;
