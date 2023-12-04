import React from "react";
import { Box, Button, Text, TextInput } from "../../components";
import LoginBase from "../general/loginbase";
import { appColor } from "../../constants/colors";
import { appStyles } from "../../styles";
import { SCREEN_NAMES } from "../../constants";

const FullName = ({ navigation }: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  const btnContinueHandler = () => {
    navigation.navigate(SCREEN_NAMES.birthday);
  };

  return (
    <LoginBase title={"Your Full Name"} onBackIconPress={goBack}>
      <Text color={"#8391A1"} mt={"3"} fontSize={"16"} fontWeight={"medium"}>
        {"Your new password must be unique from those previously used."}
      </Text>
      <Box mt={"4"}>
        <TextInput placeholder={"First Name"} />
      </Box>
      <Box mt={"3.5"}>
        <TextInput placeholder={"Last Name"} />
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
    </LoginBase>
  );
};

export default FullName;
