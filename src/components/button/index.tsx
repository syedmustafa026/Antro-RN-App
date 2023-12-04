import React from "react";
import { Button as NBButton } from "native-base";

type Props = React.ComponentProps<typeof NBButton> & {
  children?: any;
};

const Button: React.FC<Props> = (Props) => {
  return (
    <NBButton bgColor={"#2167D8"} borderRadius={"full"} py={"4"} {...Props}>
      {Props.children}
    </NBButton>
  );
};

export default Button;
