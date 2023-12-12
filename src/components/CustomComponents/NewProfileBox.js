import React from "react";
import { Image, View } from "react-native";
import { Text } from "..";
import {
  BookmarkIcon,
  HeartIcon,
  MesssageIcon,
  Verified,
} from "../../assets/svg";

export const NewProfileBox = ( props ) => {
  return (
    <View
      style={{
        width: 342,
        height: 210,
        marginTop: 12,
        backgroundColor: "#FFFF",
        borderRadius: 24,
        borderColor: "#C5C5C5",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 65,
            height: 65,
            borderRadius: 100,
            marginLeft: 15,
            marginTop: 8,
            borderColor: "#000",
            borderWidth: 4,
          }}
          source={{
            uri: "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg",
          }}
        />
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text color={"#000000"} mr={"2"} fontSize={"22"} fontWeight={"600"}>
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
        </View>
      </View>

      <Text
        color={"#000000"}
        mt={"2"}
        ml={"4"}
        mr={"2"}
        mb={"2"}
        fontSize={"14"}
        fontWeight={"400"}
      >
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. "
        }
      </Text>
      <View
        style={{
          borderStyle: "solid",
          borderColor: "#E8E8E8",
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
    </View>
  );
};
