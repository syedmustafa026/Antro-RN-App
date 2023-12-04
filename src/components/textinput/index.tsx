import { Input } from "native-base";
import React from "react";
import { styles } from "./styles";
import { appColor } from "../../constants/colors";

type Props = React.ComponentProps<typeof Input>;

const TextInput: React.FC<Props> = (Props) => {
  return (
    <Input
      style={styles.input}
      cursorColor={appColor.primary}
      borderRadius={"lg"}
      fontWeight={"medium"}
      placeholderTextColor={"#8391A1"}
      borderColor={"#E8ECF4"}
      {...Props}
    />
  );
};

export default TextInput;
