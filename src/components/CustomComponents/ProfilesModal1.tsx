import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { appColor } from "../../constants/colors";
import { Box, Text } from "..";

const ProfileModal1 = (props: any) => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <TouchableOpacity
        activeOpacity={1}
        
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          <View style={styles.modalBody}>
            <View>
              <Text
                color={"#000000"}
                mt={"2"}
                ml={"2"}
                fontSize={"22"}
                fontWeight={"600"}
              >
                {"Antro Profiles"}
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
    justifyContent: "space-between",
    backgroundColor: appColor.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 360,
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

export default ProfileModal1;
