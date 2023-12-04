import { Box } from "native-base";
import React from "react";
import LoginBase from "../general/loginbase";
import { Button, Text, TextInput } from "../../components";
import { appStyles } from "../../styles";
import { appColor } from "../../constants/colors";
import { SCREEN_NAMES } from "../../constants";

const CreatePassword = ({ navigation }: any) => {
  const goBack = () => {
    navigation.goback();
  };

  const btnVerifyHandler = () => {
    navigation.navigate(SCREEN_NAMES.passwordsuccess);
  };

  return (
    <LoginBase title={"Create new password"} onBackIconPress={goBack}>
      <Text color={"#8391A1"} mt={"3"} fontSize={"16"} fontWeight={"medium"}>
        {"Your new password must be unique from those previously used."}
      </Text>
      <Box style={appStyles.marginTop}>
        <TextInput placeholder="New Password" />
      </Box>
      <Box mt={"3.5"}>
        <TextInput placeholder="Confirm Password" />
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

export default CreatePassword;
