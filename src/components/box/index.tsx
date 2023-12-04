import React from "react";
import { Box as NBBox } from "native-base";
import { appColor } from "../../constants/colors";

type Props = React.ComponentProps<typeof NBBox> & {
  children?: any;
};

const Box: React.FC<Props> = (Props) => {
  return (
    <NBBox bg={appColor.white} {...Props}>
      {Props.children}
    </NBBox>
  );
};

export default Box;
