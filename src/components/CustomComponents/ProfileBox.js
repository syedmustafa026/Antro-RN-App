import React, { useState } from "react";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { Text } from "..";
import {
  BookmarkIcon,
  HeartIcon,
  MesssageIcon,
  ShareIconWhite,
  ThreeDots,
  Verified,
} from "../../assets/svg";
import ProfileOptionModal from "./ProfileOptionModal";
import { SCREEN_NAMES } from "../../constants";
import ProfileShareModal from "./ProfileShareModal";

export const ProfileBox = (props) => {
  const [optionModal, setOptionModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  return (
    <Pressable
      onPress={() => props.navigation.navigate(SCREEN_NAMES.profiles)}
      style={{
        width: 342,
        height: 245,
        marginTop: 12,
        backgroundColor: "#FFF0D9",
        borderRadius: 24,
        borderColor: "#DFAF62",
        borderWidth: 1,
      }}
    >
      <ProfileOptionModal
        setModalVisible={setOptionModal}
        visible={optionModal}
      />
      <ProfileShareModal
        setModalVisible={setShareModal}
        visible={shareModal}
      />
      {/* <View
        style={{
          position: "absolute",
          bottom: 96,
          right: 102,
        }}
      >
        <EclipseCircle />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 96,
          right: 58,
        }}
      >
        <EclipseCircle />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 96,
          right: 102,
        }}
      >
        <EclipseCircle />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 58,
          right: 197,
        }}
      >
        <EclipseCircle />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 25,
          right: 94,
        }}
      >
        <EclipseCircle />
      </View> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{
            width: 65,
            height: 65,
            borderRadius: 100,
            marginLeft: 19,
            marginTop: 13,
            borderColor: "#fff",
            borderWidth: 4,
          }}
          source={{
            uri: "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            height: 40,
            marginTop: 19,
            marginRight: 14,
          }}
        >
          <Pressable
            onPress={() => setShareModal(true)}
            style={{
              backgroundColor: "#000",
              padding: 10,
              borderRadius: 15,
              marginRight: 12,
            }}
          >
            <ShareIconWhite />
          </Pressable>
          <TouchableOpacity
            onPress={() => setOptionModal(true)}
            style={{
              padding: 8,
              borderRadius: 15,
              borderColor: "#000",
              borderWidth: 1,
            }}
          >
            <ThreeDots />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          color={"#000000"}
          ml={"4"}
          mr={"2"}
          fontSize={"22"}
          fontWeight={"600"}
        >
          {"Sam Paul"}
        </Text>
        <Verified />
      </View>
      <Text
        color={"#000000"}
        ml={"4"}
        mr={"2"}
        fontSize={"14"}
        fontWeight={"400"}
      >
        {"Software Developer"}
      </Text>
      <Text
        color={"#000000"}
        mt={"2"}
        ml={"4"}
        mr={"2"}
        fontSize={"14"}
        fontWeight={"400"}
      >
        {"msurajkumar88@gmail.com"}
      </Text>
      <Text
        color={"#000000"}
        ml={"4"}
        mr={"2"}
        mb={"2"}
        fontSize={"14"}
        fontWeight={"400"}
      >
        {"+91 8919299354"}
      </Text>
      <View
        style={{
          borderStyle: "solid",
          borderColor: "#e7bd7b",
          borderTopWidth: 1,
          flex: 1,
        }}
      />
      <Pressable onPress={() => props.navigation.navigate(SCREEN_NAMES.profileDetails)}
        style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
              marginVertical: 8,
            }}
          >
            <HeartIcon />
            <Text
              color={"#000000"}
              ml={"4"}
              mr={"2"}
              fontSize={"14"}
              fontWeight={"600"}
            >
              {"123"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
              marginVertical: 8,
            }}
          >
            <MesssageIcon />
            <Text
              color={"#000000"}
              ml={"4"}
              mr={"2"}
              fontSize={"14"}
              fontWeight={"600"}
            >
              {"3"}
            </Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <BookmarkIcon />
        </View>
      </Pressable>
    </Pressable >
  );
};
