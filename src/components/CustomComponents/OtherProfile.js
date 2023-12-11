import React, { useState } from "react";
import { Image, Pressable, ImageBackground, TouchableOpacity, View } from "react-native";
import { Text } from "..";
import {
  BookmarkIcon,
  EclipseCircle,
  HeartIcon,
  MesssageIcon,
  ShareIcon,
  ThreeDots,
  Verified,
} from "../../assets/svg";
import ProfileOptionModal from "./ProfileOptionModal"
import { SCREEN_NAMES } from "../../constants";
import bgImg from '../../assets/images/loop.png'

export const OtherProfileBox = (props) => {
  const [optionModal, setOptionModal] = useState(false)
  return (
    <Pressable
      style={{
        width: 342,
        height: 245,
        marginTop: 12,
        borderRadius: 24,
        backgroundColor: "#fffaf2",
        borderColor: "#DFAF62",
        borderWidth: 1,
      }}
    >
      <ImageBackground source={bgImg}
        resizeMode="cover" >
        <ProfileOptionModal
          setModalVisible={setOptionModal}
          visible={optionModal}
        />
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
              uri: "https://s3-alpha-sig.figma.com/img/9bbc/f2a8/f6d1f753b286332b007b2076174bf01a?Expires=1703462400&Signature=EgvFyuwhVDbCW3vqtweuwLuV9ojMEfPGBnpoGfbPj7ddTJqZYm~aOThU7A-p-87Xkm83jhcYQlqVVsdstdNIpvlXL84djS7Yt2h2Vmr-ypAP001VN0prqHzWPxkJRZ-TEjJxMe0l6ptWGDueJR5QmxKJ7fbn79cL-qeaOOrG2G2EXJzfUgJuRrIn1G32bsl7e~qT8Y4t7x5t5FTJO2jt3yAljYMXhbV5fpPfVhukAY2-hBepiJ2fSxlyKEuFMLyghdTM83eTf5gU2OTisbDrzv4DWn0oz3roCRs9P~b6hgaBBTuo42hpmt27026TkOTVfl8suzZF-Do1n4lL4WANgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            <View
              style={{
                backgroundColor: "#000",
                padding: 10,
                borderRadius: 15,
                marginRight: 12,
              }}
            >
              <ShareIcon />
            </View>
            <TouchableOpacity onPress={() => setOptionModal(true)}
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
            {"Digital Dummy"}
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
          {"IT Services"}
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
        </View>
      </ImageBackground>
    </Pressable>
  );
};
