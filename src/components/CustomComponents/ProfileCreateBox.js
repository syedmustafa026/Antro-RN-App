import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Text } from "..";
import { Button, Icon, Ionicons } from "native-base";
import { PlusIcon, TrashIcon } from "../../assets/svg";
import { appColor } from "../../constants/colors";

export const ProfileCreateBox = (props) => {
  return (
    <Pressable
      style={{
        width: 342,
        height: 256,
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
        fontSize={"24"}
        marginTop={"8"}
        textAlign={"center"}
        fontWeight={"600"}
      >
        {"Want to create more profile"}
      </Text>
      <Text
        color={"#000000"}
        alignSelf={"center"}
        fontSize={"14"}
        mt={"2"}
        textAlign={"center"}
        fontWeight={"400"}
      >
        {"Let’s increase your social  reach"}
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          backgroundColor: appColor.black,
          borderRadius: 50,
          marginVertical: 30,
          width: 258,
          alignSelf: "center",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingHorizontal: 14,
          paddingVertical: 4,
          height: 60,
        }}
      >
        <PlusIcon />
        <Text
          color={"#fff"}
          fontSize={"16"}
          textAlign={"center"}
          fontWeight={"600"}
          mb={"1"}
        >
          {"Create new profile"}
        </Text>
      </TouchableOpacity>
    </Pressable>
  );
};
