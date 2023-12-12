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
  CopyText,
} from "../../assets/svg";
import { height } from "../../constants/dimension";
import LinearGradient from "react-native-linear-gradient";
const ProfileShareModal = (props) => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <View style={styles.modalView}>
        <LinearGradient colors={['#FFF5D7', '#FFF5D7', '#FFF5CE']} style={styles.linearGradient}>
          <View style={styles.modalBody}>
            <TouchableOpacity
              style={{ position: 'absolute', right: 15, top: 20 }}
              onPress={() => props.setModalVisible(false)}>
              <CrossIcon />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 53 }}>
              <Image
                style={{
                  width: 120,
                  height: 120,
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  color={"#000000"}
                  ml={"4"}
                  mr={"2"}
                  mt={"2"}
                  fontSize={"22"}
                  fontWeight={"600"}
                >
                  {"Sam Paul"}
                </Text>
                <View style={{ marginTop: 12 }}>
                  <Verified />
                </View>
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
            <View style={{
              width: 294,
              alignSelf: 'center',
              height: 333,
              backgroundColor: appColor.white,
              marginTop: 30,
              borderRadius: 20,
              alignItems: 'center'
            }}>
              <Text
                color={"#000000"}
                mt={"4"}
                fontSize={"19"}
                fontWeight={"600"}
              >
                {"Sharing Personal Profile"}
              </Text>
              <Image
                style={{
                  width: 250,
                  height: 250,
                  borderColor: "#fff",
                  borderWidth: 4,
                }}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/e41d/d1bd/8829d0aa2b0aa94e85dea7d6aaf97fcc?Expires=1703462400&Signature=F3xNqGAfBTHwrSi7TR~yxAHuE0YgrlVk46a2ovp-ODgrZ54v9o3TpSjRcH-y6x1qJx1r3oeDh2ovTl7~~opc0HwVRVPcG7eAHudjzmnTBRcT-n717kcbdNqHSWBXQkoHLD35VsOdZwVb8rTUontOP6UrHLHTUpaNXSAF4YmpPFnWXOWpcqrkzUCETl8iUgPDWL5UuYlny1K-thauybyfLwnTdsZRW4Y9ALDItDYUW3nFCBoCnBqBrFxqY4bkmLQ-p4QeSJZoQidh78fOfVNVoKAHtmGrtuFQKThvjuCoD9V1khTuZMZAwKeevVULE2vga1xUdCUq8w5ROJJrzRAjgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                }}
              />
              <Text
                color={"#000000"}
                fontSize={"12"}
                fontWeight={"500"}
              >
                {"Tap to save QR code in your phone"}
              </Text>
            </View>
            <View style={{
              width: 294,
              alignSelf: 'center',
              height: 60,
              flexDirection:'row',
              backgroundColor: appColor.white,
              marginTop: 20,
              borderRadius: 20,
              justifyContent:'space-around',
              alignItems: 'center'
            }}>
              <Text
                color={"#000000"}
                fontSize={"12"}
                fontWeight={"500"}
              >
                {"Tap to save QR code in your phone"}
              </Text>
              <CopyText/>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal >
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  modalView: {
    height: height,
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

export default ProfileShareModal;
