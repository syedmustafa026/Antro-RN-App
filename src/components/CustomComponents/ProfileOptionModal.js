import React from "react";
import { Modal, StyleSheet, View, Image, TouchableOpacity, Pressable } from "react-native";
import ProfileModal2 from "./ProfileModal2";
import { appColor } from "../../constants/colors";
import { Box, Text } from "..";
import {
  Verified,
  CrossIcon,
  BlueCheck,
  CreateUserProfile,
  RectangleIcon,
  EditIcon,
  TrashIcon,
} from "../../assets/svg";

const ProfileOptionModal = (props) => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <TouchableOpacity activeOpacity={1} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalBody}>
            <TouchableOpacity
              style={{ position: 'absolute', right: 20, top: 20 }}
              onPress={() => props.setModalVisible(false)}>
              <CrossIcon />
            </TouchableOpacity>
            <View style={{ marginTop: 60, marginLeft: 25 }}>
              <Pressable style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 26 }}>
                <RectangleIcon />
                <Text
                  color={"#000000"}
                  ml={"15"}
                  fontSize={"16"}
                  fontWeight={"400"}
                >
                  {"Make Inactive"}
                </Text>
              </Pressable>
              <Pressable style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 26 }}>
                <EditIcon />
                <Text
                  color={"#000000"}
                  ml={"15"}
                  fontSize={"16"}
                  fontWeight={"400"}
                >
                  {"Update Profile"}
                </Text>
              </Pressable>
              <Pressable style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 26 }}>
                <TrashIcon />
                <Text
                  color={"#000000"}
                  ml={"15"}
                  fontSize={"16"}
                  fontWeight={"400"}
                >
                  {"Delete"}
                </Text>
              </Pressable>
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
                color={"#979C9E"}
                fontSize={"16"}
                fontWeight={"500"}
                alignSelf={"center"}
                mt={"3"}
              >
                {"Cancel"}
              </Text>
            </View>
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

export default ProfileOptionModal;
