import { Box } from "native-base";
import React from "react";
import LoginBase from "../general/loginbase";
import { Button, Text, TextInput } from "../../components";
import { appStyles } from "../../styles";
import { appColor } from "../../constants/colors";
import { SCREEN_NAMES } from "../../constants";

const OTP = ({ navigation }: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  const textInput = ({}) => {
    return (
      <TextInput
        fontWeight={"bold"}
        height={"60"}
        width={"70"}
        textAlign={"center"}
        keyboardType="number-pad"
      />
    );
  };

  const btnVerifyHandler = () => {
    navigation.navigate(SCREEN_NAMES.createpassword);
  };

  return (
    <LoginBase title={"OTP Verification"} onBackIconPress={goBack}>
      <Text color={"#838BA1"} fontWeight={"medium"} fontSize={"16"} mt={"3"}>
        {"Enter the verification code we just sent on your email address."}
      </Text>
      <Box style={appStyles.marginTop}>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {textInput({})}
          {textInput({})}
          {textInput({})}
          {textInput({})}
        </Box>
      </Box>
      <Box style={appStyles.marginTop}>
        <Button onPress={btnVerifyHandler}>
          <Text
            color={appColor.white}
            style={appStyles.btn}
            fontWeight={"semibold"}
          >
            {"Verify"}
          </Text>
        </Button>
      </Box>
    </LoginBase>
  );
};

export default OTP;
