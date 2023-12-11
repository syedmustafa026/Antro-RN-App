import React, { useState } from "react";
import { Image, Pressable, Button, TouchableOpacity, View } from "react-native";
import { Text } from "..";
import {
} from "../../assets/svg";
import ProfileOptionModal from "./ProfileOptionModal"
import { SCREEN_NAMES } from "../../constants";
import bgImg from '../../assets/images/loop.png'
import { appColor } from "../../constants/colors";
import { appStyles } from "../../styles";

export const ProfileCreateBox = (props) => {
  const [optionModal, setOptionModal] = useState(false)
  return (
    <Pressable
      style={{
        width: 342,
        height: 245,
        marginTop: 12,
        borderRadius: 24,
        backgroundColor: "#D9EAFF",
        borderColor: "#78ABEB",
        borderWidth: 1,
      }}
    >
      <Text
        color={"#000000"}
        alignSelf={"center"}
        fontSize={"26"}
        marginTop={"8"}

        textAlign={"center"}
        fontWeight={"600"}
      >
        {"Want to create more profile"}
      </Text>
      <Text
        color={"#000000"}
        alignSelf={"center"}
        fontSize={"16"}
        mt={"2"}
        textAlign={"center"}
        fontWeight={"400"}
      >
        {"Let’s increase your social  reach"}
      </Text>
      
    </Pressable>
  );
};
