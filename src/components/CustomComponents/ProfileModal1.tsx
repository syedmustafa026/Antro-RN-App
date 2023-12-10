import React from "react";
import { Modal, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { appColor } from "../../constants/colors";
import { Box, Text } from "..";
import {
  Verified,
  CrossIcon,
  BlueCheck,
  CreateUserProfile,
} from "../../assets/svg";

const ProfileModal1 = (props: any) => {
  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <TouchableOpacity activeOpacity={1} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalBody}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 12,
              }}
            >
              <Text
                color={"#000000"}
                mt={"2"}
                ml={"2"}
                fontSize={"22"}
                fontWeight={"600"}
              >
                {"Antro Profiles"}
              </Text>
              <TouchableOpacity onPress={() => props.setModalVisible(false)}>
                <CrossIcon />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 36,
                }}
              >
                <Image
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 100,
                    marginLeft: 15,
                    borderColor: "#D8D8D8",
                    borderWidth: 4,
                  }}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/7fdc/cc78/3264eedc4fb989984eecbc4058a219f2?Expires=1702252800&Signature=fcIa1eKN4Pc1bXBeAS2EYMT1uweksCZDrrBQAbcqv4y415H~UCAJsBD-N78QRXHlZ8nArHivq1jMRUkBDMFB3GIFFMIf33gLXrove~~ddZ3BujUYWtago0NMyTI1HOaxyodRURBeJ1Ul0Z3QNq1h8a0z4RFseSW0Z5JxeIvVe7TVzBTfDdSdDNM-eyRkUwTsxuj1gQVAivl~n7rGWAFls5tmwPgrSbZeUG1l~YtZCY-Mj4VA-kYqEYQD0nnDWHB-RRE0aMoIuUljShb2PbCWIGaQKOmlzzFm3g2g4XnGsMNi9Cb8RmcKEMz-8voNFP7w3C8TzZbZu9Jv4~94BCE0Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                  }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: 28,
                    }}
                  >
                    <Text
                      color={"#000000"}
                      mr={"2"}
                      ml={"4"}
                      fontSize={"18"}
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
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                props.setModalVisible(false), props.setModa2lVisible(true);
              }}
              style={{
                borderColor: "#E8E8E8",
                borderWidth: 1,
                paddingHorizontal: 24,
                paddingVertical: 6,
                width: "70%",
                alignSelf: "center",
                marginTop: 32,
                borderRadius: 24,
              }}
            >
              <Text
                color={"#000000"}
                alignSelf={"center"}
                fontSize={"14"}
                fontWeight={"400"}
              >
                {"Manage your Antro Profile"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                borderStyle: "solid",
                borderColor: "#E8E8E8",
                borderTopWidth: 1,
                width: "90%",
                alignSelf: "center",
                marginTop: 20,
                flex: 1,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 31,
            }}
          >
            <View style={{ marginLeft: 26 }}>
              <CreateUserProfile />
            </View>
            <Text
              color={"#000000"}
              fontSize={"14"}
              marginLeft={"14"}
              fontWeight={"600"}
            >
              {"Create Another Profile"}
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
    height: 420,
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
