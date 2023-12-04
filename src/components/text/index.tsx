import React from "react";
import { Text as NBText } from "native-base";

type Props = React.ComponentProps<typeof NBText> & {
  children?: any;
};

const Text: React.FC<Props> = (Props) => {
  return <NBText {...Props}>{Props.children}</NBText>;
};

export default Text;
