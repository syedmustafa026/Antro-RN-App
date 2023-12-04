import React from "react";
import { Box, Button, Text, TextInput } from "../../components";
import LoginBase from "../general/loginbase";
import { appStyles } from "../../styles";
import { appColor } from "../../constants/colors";
import { SCREEN_NAMES } from "../../constants";
import { Eye } from "../../assets/svg";

const Password = ({ navigation }: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  const btnLoginHandler = () => {
    navigation.navigate(SCREEN_NAMES.otp);
  };

  return (
    <LoginBase title={"Please Enter your Password"} onBackIconPress={goBack}>
      <Box style={appStyles.marginTop}>
        <TextInput placeholder="Enter your password" />
      </Box>
      <Box style={appStyles.marginTop}>
        <Button onPress={btnLoginHandler}>
          <Text
            color={appColor.white}
            style={appStyles.btn}
            fontWeight={"semibold"}
          >
            {"Login"}
          </Text>
        </Button>
      </Box>
    </LoginBase>
  );
};

export default Password;
