import React from "react";
import { Modal, StyleSheet, View, Image, TouchableOpacity, Pressable } from "react-native";
import ProfileModal2 from "./ProfileModal2";
import { appColor } from "../../constants/colors";
import { Button, Text } from "..";
import {
  Verified,
  CrossIcon,
  BlueCheck,
  CreateUserProfile,
  RectangleIcon,
  EditIcon,
  TrashIcon,
} from "../../assets/svg";
import { appStyles } from "../../styles";
import { width } from "../../constants/dimension";
import { SCREEN_NAMES } from "../../constants";

const ProfileVerifyModal = (props) => {
  const btnContinueHandler = () => {
    props.navigation.navigate(SCREEN_NAMES.profilesuccess)
  }
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <TouchableOpacity activeOpacity={1} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalBody}>
            <Text
              color={"#000000"}
              alignSelf={"center"}
              fontSize={"20"}
              mt={"4"}
              fontWeight={"600"}
            >
              {"Verify your profile picture"}
            </Text>
            <View
              style={{
                borderStyle: "solid",
                borderColor: "#E8E8E8",
                borderTopWidth: 1,
                width: "90%",
                alignSelf: "center",
                marginTop: 10,
                flex: 1,
              }}
            />
            <Text
              color={"#000000"}
              fontSize={"18"}
              mt={"3"}
              fontWeight={"600"}
            >
              {"Let’s make sure you’re you"}
            </Text>
            <Text
              color={"#8391A1"}
              fontSize={"12"}
              mt={"1"}
              fontWeight={"500"}
            >
              {"Position yourself in the center of the camera and then move your face left and right to show both sides."}
            </Text>
            <Button style={{ width: "80%", marginLeft: width / 10, height: 53, marginTop: 24 }} onPress={btnContinueHandler}>
              <Text
                color={appColor.white}
                style={appStyles.btn}
                fontWeight={"semibold"}
                fontSize={"16px"}
              >
                {"Verify now"}
              </Text>
            </Button>
            <Text
              onPress={() => props.setModalVisible(false)}
              color={"#5B5B5B"}
              fontSize={"16"}
              alignSelf={"center"}
              mt={"3"}
              fontWeight={"400"}
            >
              {"I will do it later"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000099",
  },
  modalView: {
    backgroundColor: appColor.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 300,
    shadowColor: appColor.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: appColor.white,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingHorizontal: 3,
  },
  modalBody: {
    padding: 16,
    justifyContent: "flex-end",
  },
});

export default ProfileVerifyModal;
