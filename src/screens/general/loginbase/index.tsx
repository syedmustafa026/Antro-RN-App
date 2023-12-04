import React from "react";
import { Box, Text } from "../../../components";
import { BackIcon } from "../../../assets/svg";
import { styles } from "./styles";

interface Props {
  onBackIconPress?: any;
  title?: string;
  children?: any;
}

const LoginBase = ({ onBackIconPress, title, children }: Props) => {
  return (
    <Box flex={1} padding={"8"}>
      <BackIcon onPress={onBackIconPress} />
      <Text style={styles.txtTitle} fontWeight={"semibold"}>
        {title}
      </Text>
      {children}
    </Box>
  );
};

export default LoginBase;
