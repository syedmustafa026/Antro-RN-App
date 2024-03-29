import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Box, Text } from "../../components";
import { appColor } from "../../constants/colors";
import ProfileOptionModal from "../../components/CustomComponents/ProfileOptionModal";
import { SCREEN_NAMES } from "../../constants"
import ProfileModal2 from "../../components/CustomComponents/ProfileModal2";
import { Input } from "native-base";
import {
  BookmarkIcon,
  HeartIcon,
  MesssageIcon,
  ShareIconWhite,
  ThreeDots,
  Verified,
  BackLeftArrow,
  ArrowDown,
  ShareIconBlack,
  ThumbsUpIcon,
  SendArrow,
} from "../../assets/svg";

const ProfileDetails = ({ navigation }) => {
  const [profileModa2, setProfileModa2] = useState(false);
  const [optionModal, setOptionModal] = useState(false);

  return (
    <Box flex={1} bgColor={appColor.white}>
      <ScrollView>
        <ProfileModal2
          setModalVisible={setProfileModa2}
          visible={profileModa2}
        />
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 28,
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <BackLeftArrow />
          </Pressable>
          <Pressable
            onPress={() => setProfileModa2(true)}
            style={{
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              color={"#000000"}
              alignSelf={"center"}
              fontSize={"18"}
              mr={"2"}
              fontWeight={"600"}
            >
              {"View Profiles"}
            </Text>
            <ArrowDown />
          </Pressable>
          <ShareIconBlack />
        </View>
        <Pressable
          style={{
            height: 294,
            backgroundColor: "#FFF0D9",
            paddingHorizontal: 8,
          }}
        >
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
                onPress={() => navigation.navigate(SCREEN_NAMES.profileDetails)}
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
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "#fff",
                width: 115,
                height: 30,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                paddingVertical: 3,
                marginRight: 6,
                marginLeft: 15,
                marginVertical: 10,
              }}
            >
              <Text
                color={"#000000"}
                textAlign={"left"}
                fontSize={"12"}
                fontWeight={"400"}
              >
                {"Product Design"}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "#fff",
                width: 115,
                height: 30,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                paddingVertical: 3,
                marginHorizontal: 2,
                marginVertical: 10,
              }}
            >
              <Text
                color={"#000000"}
                textAlign={"left"}
                fontSize={"12"}
                fontWeight={"400"}
              >
                {"React JS"}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "#fff",
                width: 115,
                height: 30,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                paddingVertical: 3,
                marginHorizontal: 2,
                marginVertical: 10,
              }}
            >
              <Text
                color={"#000000"}
                textAlign={"left"}
                fontSize={"12"}
                fontWeight={"400"}
              >
                {"Angular"}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderStyle: "solid",
              borderColor: "#e7bd7b",
              borderTopWidth: 1,
              flex: 1,
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
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
        <Text
          color={"#000000"}
          ml={"8"}
          mt={"4"}
          fontSize={"16"}
          fontWeight={"600"}
        >
          {"Likes"}
        </Text>
        <View style={{ marginLeft: 26, marginTop: 13, flexDirection: "row" }}>
          <Image
            style={{
              width: 36,
              height: 36,
              marginHorizontal: 5,
              borderRadius: 100,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1703462400&Signature=LOfpKKx~~BMBDCwCorFtql8kR4r4SvfUiYCSdbHdxXY6BYr3wTRuA5dN~3y5iXTnHzwnbOVsoANPplTI2l6v9b26WEBdaxDDdWX4-aJfM-K34t5nTc82dGDsaVJKvlV7ivuI8Ew-YVxsrBuccs1d-GTZ3QtT0SlGkSGhHrLIUCtA-iO7b57X-9q5IVsc0bqsp8NqQEBf~tXzNVX3SUc8MNfsAQPe0DB5LgeW06NzdfTVBfBxF3BBxlpMB0CfD~esP18xa7ptZTGY0Z30HOOFU3~M7uy14kQCyHQ037pRxaNAjcjIgTDJ1fShXeavoi8dedwNKy2I7rch8UEWSKZN0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
          />
          <Image
            style={{
              width: 36,
              marginHorizontal: 5,
              height: 36,
              borderRadius: 100,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1703462400&Signature=l3nxlT78eYiXNsQ5k5bsYZFvQifDNV7oqiMErt~V7RX0-jLk19qWUx-hxnFqOvkfHpZjaz~4wuW3wDxTJQGlLmvnCPkhUAPaUylgbPcUKvXLGwZDOzBjYdGpUE10PCGcS42HRDWxbaJb8xkfkr-0UTJaTAtPMu3B1q67MQYflKDsA9~e8~sPaIImFNHEU9Qho0ZQAvPLFUeAdgyeGNL3un1f0LpwFz1F02mA3NDJXTyows~gZcWAm9nebBd646MsMNzmOZf~0uT8atV1FzGZpGTjD66WXbqpHdMSUZqH-hYvHrGv6jNM4z8jNXlIkJzhz49DlQhpXeg4mUq1-d1Dfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
          />
          <Image
            style={{
              width: 36,
              marginHorizontal: 5,
              height: 36,
              borderRadius: 100,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/08e4/55fe/112b5aa889f8276e41832a747a9bda45?Expires=1703462400&Signature=KXwg~ZjjMSjzTZnzGmaUhkYew27CstoZgfILLAPf79qWRARTK30cfe7bbRY0L5EB1Osc5odqqHY-pl~q~qE2cUISRVTFpJV1WWofJaJXhOrZtjKr~5LvF6O1zS4dwq0K1ba8y8bu7F3J4KgttKvQIt5Zw4-XI9mkqhT3KzwAmMGjMOnHOKZYnDfoJiKOiV8QSs-x6wy2vo19ijCcwS1T1DZTw0jaQ4xrYHQ06OiodcUOHtXPDJGwCeWEbJ7zE0rylyR1~FxEfQleGwC1ox2s7a6d~DxJ~-cGlLhlWauFT19ytgGmtTg7a75dtamAYoYIqNFfd2OcK2KLVQoi~1aHXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
          />
          <Image
            style={{
              width: 36,
              height: 36,
              marginHorizontal: 5,
              borderRadius: 100,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/1994/067c/3ac3d40d2341bd81bd13e2e7f755bf0d?Expires=1703462400&Signature=LOfpKKx~~BMBDCwCorFtql8kR4r4SvfUiYCSdbHdxXY6BYr3wTRuA5dN~3y5iXTnHzwnbOVsoANPplTI2l6v9b26WEBdaxDDdWX4-aJfM-K34t5nTc82dGDsaVJKvlV7ivuI8Ew-YVxsrBuccs1d-GTZ3QtT0SlGkSGhHrLIUCtA-iO7b57X-9q5IVsc0bqsp8NqQEBf~tXzNVX3SUc8MNfsAQPe0DB5LgeW06NzdfTVBfBxF3BBxlpMB0CfD~esP18xa7ptZTGY0Z30HOOFU3~M7uy14kQCyHQ037pRxaNAjcjIgTDJ1fShXeavoi8dedwNKy2I7rch8UEWSKZN0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
          />
          <Image
            style={{
              width: 36,
              marginHorizontal: 5,
              height: 36,
              borderRadius: 100,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1703462400&Signature=l3nxlT78eYiXNsQ5k5bsYZFvQifDNV7oqiMErt~V7RX0-jLk19qWUx-hxnFqOvkfHpZjaz~4wuW3wDxTJQGlLmvnCPkhUAPaUylgbPcUKvXLGwZDOzBjYdGpUE10PCGcS42HRDWxbaJb8xkfkr-0UTJaTAtPMu3B1q67MQYflKDsA9~e8~sPaIImFNHEU9Qho0ZQAvPLFUeAdgyeGNL3un1f0LpwFz1F02mA3NDJXTyows~gZcWAm9nebBd646MsMNzmOZf~0uT8atV1FzGZpGTjD66WXbqpHdMSUZqH-hYvHrGv6jNM4z8jNXlIkJzhz49DlQhpXeg4mUq1-d1Dfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
          />
          <Image
            style={{
              width: 36,
              marginHorizontal: 5,
              height: 36,
              borderRadius: 100,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/08e4/55fe/112b5aa889f8276e41832a747a9bda45?Expires=1703462400&Signature=KXwg~ZjjMSjzTZnzGmaUhkYew27CstoZgfILLAPf79qWRARTK30cfe7bbRY0L5EB1Osc5odqqHY-pl~q~qE2cUISRVTFpJV1WWofJaJXhOrZtjKr~5LvF6O1zS4dwq0K1ba8y8bu7F3J4KgttKvQIt5Zw4-XI9mkqhT3KzwAmMGjMOnHOKZYnDfoJiKOiV8QSs-x6wy2vo19ijCcwS1T1DZTw0jaQ4xrYHQ06OiodcUOHtXPDJGwCeWEbJ7zE0rylyR1~FxEfQleGwC1ox2s7a6d~DxJ~-cGlLhlWauFT19ytgGmtTg7a75dtamAYoYIqNFfd2OcK2KLVQoi~1aHXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
          />
          <Image
            style={{
              width: 36,
              marginHorizontal: 5,
              height: 36,
              borderRadius: 100,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1703462400&Signature=l3nxlT78eYiXNsQ5k5bsYZFvQifDNV7oqiMErt~V7RX0-jLk19qWUx-hxnFqOvkfHpZjaz~4wuW3wDxTJQGlLmvnCPkhUAPaUylgbPcUKvXLGwZDOzBjYdGpUE10PCGcS42HRDWxbaJb8xkfkr-0UTJaTAtPMu3B1q67MQYflKDsA9~e8~sPaIImFNHEU9Qho0ZQAvPLFUeAdgyeGNL3un1f0LpwFz1F02mA3NDJXTyows~gZcWAm9nebBd646MsMNzmOZf~0uT8atV1FzGZpGTjD66WXbqpHdMSUZqH-hYvHrGv6jNM4z8jNXlIkJzhz49DlQhpXeg4mUq1-d1Dfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
          />
          <Text
            style={{
              backgroundColor: "#d9eaff",
              borderRadius: 100,
              paddingHorizontal: 6,
              paddingVertical: 3,
              textAlign: "center",
              marginHorizontal: 5,
            }}
            color={"#2f82ff"}
            fontSize={"16"}
            fontWeight={"600"}
          >
            {"+25"}
          </Text>
        </View>
        <Text
          color={"#000000"}
          ml={"8"}
          mt={"4"}
          fontSize={"16"}
          fontWeight={"600"}
        >
          {"Comments"}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
              marginLeft: 30,
              marginTop: 13,
            }}
            source={{
              uri: "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg",
            }}
          />
          <View
            style={{
              borderRadius: 16,
              backgroundColor: "#ebf7fe",
              width: "70%",
              height: 159,
              marginHorizontal: 20,
              marginTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 6,
              }}
            >
              <Text
                color={"#000000"}
                ml={"4"}
                mr={"2"}
                fontSize={"16"}
                fontWeight={"600"}
              >
                {"Sam Paul"}
              </Text>
              <Verified />
            </View>
            <Text color={"#575757"} ml={"4"} fontSize={"10"} fontWeight={"500"}>
              {"10: 50 AM"}
            </Text>
            <Text color={"#575757"} ml={"4"} fontSize={"14"} fontWeight={"500"}>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. "
              }
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 25,
                marginVertical: 8,
              }}
            >
              <ThumbsUpIcon />
              <Text
                color={"#000000"}
                ml={"2"}
                mr={"2"}
                fontSize={"12"}
                fontWeight={"600"}
              >
                {"24"}
              </Text>
              <Text
                color={"#000000"}
                ml={"4"}
                mr={"2"}
                fontSize={"12"}
                fontWeight={"600"}
              >
                {"Reply"}
              </Text>
            </View>
          </View>
        </View>
        <Text
          color={"#999"}
          fontSize={"12"}
          fontWeight={"500"}
          alignSelf={"center"}
          mt={"3"}
        >
          {"Show Previous Reply"}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 36,
              height: 36,
              borderRadius: 100,
              marginLeft: 30,
              marginTop: 13,
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/08e4/55fe/112b5aa889f8276e41832a747a9bda45?Expires=1703462400&Signature=KXwg~ZjjMSjzTZnzGmaUhkYew27CstoZgfILLAPf79qWRARTK30cfe7bbRY0L5EB1Osc5odqqHY-pl~q~qE2cUISRVTFpJV1WWofJaJXhOrZtjKr~5LvF6O1zS4dwq0K1ba8y8bu7F3J4KgttKvQIt5Zw4-XI9mkqhT3KzwAmMGjMOnHOKZYnDfoJiKOiV8QSs-x6wy2vo19ijCcwS1T1DZTw0jaQ4xrYHQ06OiodcUOHtXPDJGwCeWEbJ7zE0rylyR1~FxEfQleGwC1ox2s7a6d~DxJ~-cGlLhlWauFT19ytgGmtTg7a75dtamAYoYIqNFfd2OcK2KLVQoi~1aHXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            }}
          />
          <View
            style={{
              borderRadius: 16,
              backgroundColor: "#ebf7fe",
              width: "70%",
              height: 159,
              marginHorizontal: 20,
              marginTop: 15,
              marginBottom:10
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 6,
              }}
            >
              <Text
                color={"#000000"}
                ml={"4"}
                mr={"2"}
                fontSize={"16"}
                fontWeight={"600"}
              >
                {"Maria Paul"}
              </Text>
              <Verified />
            </View>
            <Text color={"#575757"} ml={"4"} fontSize={"10"} fontWeight={"500"}>
              {"10: 50 AM"}
            </Text>
            <Text color={"#575757"} ml={"4"} fontSize={"14"} fontWeight={"500"}>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. "
              }
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 25,
                marginVertical: 8,
              }}
            >
              <ThumbsUpIcon />
              <Text
                color={"#000000"}
                ml={"2"}
                mr={"2"}
                fontSize={"12"}
                fontWeight={"600"}
              >
                {"24"}
              </Text>
              <Text
                color={"#000000"}
                ml={"4"}
                mr={"2"}
                fontSize={"12"}
                fontWeight={"600"}
              >
                {"Reply"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{
        width: "100%",
        height: 60,
        flexDirection: 'row',
        backgroundColor: appColor.white,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 10,
        elevation: 9,
      }}>
        <Image
          style={{
            width: 42,
            height: 42,
            borderRadius: 100,
            marginLeft: 20,
            marginVertical: 13,
          }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/aac6/b1b1/8acee54880feb3c84cfacdb2ff89076d?Expires=1703462400&Signature=l3nxlT78eYiXNsQ5k5bsYZFvQifDNV7oqiMErt~V7RX0-jLk19qWUx-hxnFqOvkfHpZjaz~4wuW3wDxTJQGlLmvnCPkhUAPaUylgbPcUKvXLGwZDOzBjYdGpUE10PCGcS42HRDWxbaJb8xkfkr-0UTJaTAtPMu3B1q67MQYflKDsA9~e8~sPaIImFNHEU9Qho0ZQAvPLFUeAdgyeGNL3un1f0LpwFz1F02mA3NDJXTyows~gZcWAm9nebBd646MsMNzmOZf~0uT8atV1FzGZpGTjD66WXbqpHdMSUZqH-hYvHrGv6jNM4z8jNXlIkJzhz49DlQhpXeg4mUq1-d1Dfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          }}
        />
        <View style={{ width: '70%', paddingTop: 8 }}>
          <Input
            style={{
              fontSize: 16,
              backgroundColor: "#F7F8F9",
              paddingTop: 12,
              paddingBottom: 6,
              paddingLeft: 12,
              width: "70%",
            }}
            marginLeft={3}
            borderRadius={"3xl"}
            fontWeight={"medium"}
            placeholder="     Add a comment"
            focusOutlineColor={"#F7F8F9"}
          />
        </View>
        <TouchableOpacity style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <SendArrow />
        </TouchableOpacity>
      </View>
    </Box>
  );
};

export default ProfileDetails;
