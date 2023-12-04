import { Box, Button, Text, TextInput } from "../../components";
import React, { useState } from "react";
import { BackIcon } from "../../assets/svg";
import { appColor } from "../../constants/colors";
import LoginBase from "../general/loginbase";
import { SCREEN_NAMES } from "../../constants";
import { appStyles } from "../../styles";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");

  const goBack = () => {
    navigation.goBack();
  };

  const btnContinueHandler = () => {
    navigation.navigate(SCREEN_NAMES.password);
  };

  return (
    <LoginBase
      title={"Welcome! Glad to see you, Here!"}
      onBackIconPress={goBack}
    >
      <Box px={"0"} style={appStyles.marginTop}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
      </Box>
      <Box style={appStyles.marginTop}>
        <Button onPress={btnContinueHandler}>
          <Text
            color={appColor.white}
            style={appStyles.btn}
            fontWeight={"semibold"}
          >
            {"Continue"}
          </Text>
        </Button>
      </Box>
      <Box position={"absolute"} bottom={"16"} left={"10"} right={"10"}>
        <Button borderColor={"#8391A1"} borderWidth={"1"} bg={"#FFFFFF"}>
          <Text fontWeight={"semibold"}>{"Continue with Phone Number"}</Text>
        </Button>
      </Box>
    </LoginBase>
  );
};

export default Login;
