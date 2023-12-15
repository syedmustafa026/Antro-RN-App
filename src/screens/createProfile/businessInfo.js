import React, { useState, useEffect } from "react";
import { Image, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { Box, Button, Text, } from "../../components";
import { AddImage, BackLeftArrow, HalfProgressBar, MidProgressBar, } from "../../assets/svg";
import LoginBase from "../general/loginbase";
import { appStyles } from "../../styles";
import { appColor } from "../../constants/colors";
import { Input } from "native-base";
import { height, width } from "../../constants/dimension";
import { SCREEN_NAMES } from "../../constants";


const CreateBusinessInfo = ({ navigation }) => {

  const btnContinueHandler = () => {
    navigation.navigate(SCREEN_NAMES.createProfileStyles);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Box flex={1} padding={"5"}>
          {/* Header */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 36 }}>
            <Pressable onPress={() => navigation.goBack()}>
              <BackLeftArrow />
            </Pressable>
            <View style={{ alignSelf: 'center', width: '86%' }}>
              <Text
                color={"#000000"}
                alignSelf={'center'}
                fontSize={"22"}

                fontWeight={"600"}
              >
                {"Create Profile"}
              </Text>
            </View>
          </View>
        </Box>
        <Box flex={1}>
          <View style={{ alignItems: 'center' }}>
            <MidProgressBar />
          </View>
        </Box>
        <Box flex={1} padding={"5"}>
          <Text color={"#000000"} mt={"3"} fontSize={"26"} fontWeight={"700"}>
            {"Business info"}
          </Text>
          <Text color={"#71727A"} mt={"1"} fontSize={"14"} fontWeight={"400"}>
            {"Choose your interest."}
          </Text>
          <Box mt={"3.5"}>
            <Input
              mb={"3"}
              style={styles.input}
              cursorColor={appColor.primary}
              borderRadius={"2xl"}
              fontWeight={"medium"}
              placeholder="Job title"
              placeholderTextColor={"#8391A1"}
              focusOutlineColor={"#E2E2E2"}
            />
            <Input
              mb={"3"}
              style={styles.input}
              cursorColor={appColor.primary}
              borderRadius={"2xl"}
              fontWeight={"medium"}
              placeholder="Company"
              placeholderTextColor={"#8391A1"}
              focusOutlineColor={"#E2E2E2"}
            />
            <Pressable>
              <Input
                mb={"3"}
                editable={false}
                style={styles.input}
                cursorColor={appColor.primary}
                borderRadius={"2xl"}
                fontWeight={"medium"}
                placeholder="Select Services"
                placeholderTextColor={"#8391A1"}
                focusOutlineColor={"#E2E2E2"}
              />
            </Pressable>
            <Input
              mb={"3"}
              style={styles.input}
              cursorColor={appColor.primary}
              borderRadius={"2xl"}
              fontWeight={"medium"}
              placeholder="Website"
              placeholderTextColor={"#8391A1"}
              focusOutlineColor={"#E2E2E2"}
            />
            <Input
              mb={"3"}
              style={styles.input}
              cursorColor={appColor.primary}
              borderRadius={"2xl"}
              fontWeight={"medium"}
              placeholder="Address"
              placeholderTextColor={"#8391A1"}
              focusOutlineColor={"#E2E2E2"}
            />
            <Input
              mb={"3"}
              style={styles.input}
              cursorColor={appColor.primary}
              borderRadius={"2xl"}
              fontWeight={"medium"}
              placeholder="City"
              placeholderTextColor={"#8391A1"}
              focusOutlineColor={"#E2E2E2"}
            />
            <Pressable>
              <Input
                mb={"3"}
                editable={false}
                style={styles.input}
                cursorColor={appColor.primary}
                borderRadius={"2xl"}
                fontWeight={"medium"}
                placeholder="Country"
                placeholderTextColor={"#8391A1"}
                focusOutlineColor={"#E2E2E2"}
              />
            </Pressable>
            <Input
              mb={"16"}
              multiline={true}
              style={styles.input}
              cursorColor={appColor.primary}
              borderRadius={"2xl"}
              fontWeight={"medium"}
              placeholder="Zip/Postcode"
              placeholderTextColor={"#8391A1"}
              focusOutlineColor={"#E2E2E2"}
            />
          </Box>
        </Box>
      </ScrollView>
      <Box style={{
        width: "100%",
        height: 70,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: appColor.white,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 9,
      }}>
        <Button style={{ width: "80%", marginLeft: width / 10, height: 53 }} onPress={btnContinueHandler}>
          <Text
            color={appColor.white}
            style={appStyles.btn}
            fontWeight={"semibold"}
            fontSize={"16px"}
          >
            {"Next"}
          </Text>
        </Button>
      </Box>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.white,
  },
  input: {
    fontSize: height / 60,
    backgroundColor: "#FFFFFFE6",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    height: 56
  },
});
export default CreateBusinessInfo;
