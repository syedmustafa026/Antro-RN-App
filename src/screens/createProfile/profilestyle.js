import React, { useState, useEffect } from "react";
import { Image, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { Box, Button, Text, } from "../../components";
import { AddImage, BackLeftArrow, FullProgressBar, HalfProgressBar, MidProgressBar, } from "../../assets/svg";
import LoginBase from "../general/loginbase";
import { appStyles } from "../../styles";
import { appColor } from "../../constants/colors";
import { Input } from "native-base";
import { height, width } from "../../constants/dimension";
import { SCREEN_NAMES } from "../../constants";
import { ProfileBox } from "../../components/CustomComponents/ProfileBox";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ToggleButton } from 'react-native-paper';
import ProfileVerifyModal from "../../components/CustomComponents/ProfileVerifyModal";

const Tab = createMaterialTopTabNavigator()

const CreateProfileStyle = ({ navigation }) => {
  const [value, setValue] = useState('left')
  const [verifyModal, setVerifyModal] = useState(false)

  const btnContinueHandler = () => {
    setVerifyModal(true)
  };
  const RenderTemplates = () => {
    return (
      <View style={{ flex: 1 }}>
        <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
          <ToggleButton icon={<BackLeftArrow />} value="left" />
          <ToggleButton icon={<BackLeftArrow />} value="right" />
        </ToggleButton.Row>
        <Text color={"#000000"} mt={"3"} fontSize={"26"} fontWeight={"700"}>
          {"Style your profile"}
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileVerifyModal
          setModalVisible={setVerifyModal}
          visible={verifyModal}
          navigation={navigation}
        />
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
            <FullProgressBar />
          </View>
        </Box>
        <Box flex={1} padding={"5"}>
          <Text color={"#000000"} mt={"3"} fontSize={"26"} fontWeight={"700"}>
            {"Style your profile"}
          </Text>
          <Text color={"#71727A"} mt={"1"} fontSize={"14"} fontWeight={"400"}>
            {"Select your template."}
          </Text>
          <ProfileBox navigation={navigation} />
          <Text
            color={"#000000"}
            fontSize={"16"}
            mt={"16"}
            fontWeight={"600"}
          >
            {"Select your template"}
          </Text>
          <Tab.Navigator screenOptions={{
            swipeEnabled: false,
            tabBarActiveTintColor: appColor.black,
            tabBarAndroidRipple: true,
            tabBarIndicatorStyle: { backgroundColor: appColor.black },
            tabBarStyle: { backgroundColor: appColor.white },
          }}>
            <Tab.Screen name="New" component={RenderTemplates} />
            <Tab.Screen name="Creative" component={RenderTemplates} />
            <Tab.Screen name="Proffesiona" component={RenderTemplates} />
          </Tab.Navigator>
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
            {"Finish"}
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
export default CreateProfileStyle;
