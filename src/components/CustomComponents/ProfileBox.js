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

export const ProfileBox = (props) => {
  const [optionModal, setOptionModal] = useState(false);
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
            uri: "https://s3-alpha-sig.figma.com/img/7fdc/cc78/3264eedc4fb989984eecbc4058a219f2?Expires=1702252800&Signature=fcIa1eKN4Pc1bXBeAS2EYMT1uweksCZDrrBQAbcqv4y415H~UCAJsBD-N78QRXHlZ8nArHivq1jMRUkBDMFB3GIFFMIf33gLXrove~~ddZ3BujUYWtago0NMyTI1HOaxyodRURBeJ1Ul0Z3QNq1h8a0z4RFseSW0Z5JxeIvVe7TVzBTfDdSdDNM-eyRkUwTsxuj1gQVAivl~n7rGWAFls5tmwPgrSbZeUG1l~YtZCY-Mj4VA-kYqEYQD0nnDWHB-RRE0aMoIuUljShb2PbCWIGaQKOmlzzFm3g2g4XnGsMNi9Cb8RmcKEMz-8voNFP7w3C8TzZbZu9Jv4~94BCE0Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
            onPress={() =>
              props.navigation.navigate(SCREEN_NAMES.profileDetails)
            }
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
    </Pressable>
  );
};
