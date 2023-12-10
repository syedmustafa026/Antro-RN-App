import React from "react";
import { Modal, StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { appColor } from "../../constants/colors";
import { Box, Text } from "..";
import { Verified, CrossIcon, BlueCheck } from "../../assets/svg";

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
              <View style={{ paddingHorizontal: 15, marginTop: 25 }}>
                <BlueCheck />
              </View>
            </View>
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
                  marginTop: 16,
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
                    uri: "https://s3-alpha-sig.figma.com/img/9bbc/f2a8/f6d1f753b286332b007b2076174bf01a?Expires=1702857600&Signature=NpyZOZj8bsNPHQI-M70RNQXlO4wVeMzJHJUEpZk6krBL-OAl568KHhgR4LIeYOO5bn812T3q~wfxLRnVksImE3tIrc94Xcn5kP~sM85IHsXDcR27SUj5gEZB47nRIplkSE7uMcad4jYu71cUjCtWGtQcM9TOY0x-3T7cQgBCko25KQs6VwTYXMQ1Wbzar08BJC~OIyN2mjyDkZvvhWq4-jqgSifXH0T2eBBAVwWRMgV~8Dg0B303GypEq5IsVyvZ4-q4ipFefCcRJFCVR82KmCNzz9MytF8INbfsc1tKyl3zNiqeMQQ6r41NYfvVnjC6Fk9Yko14aIWHnseMTDudnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                  }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 16,
                    }}
                  >
                    <Text
                      color={"#000000"}
                      mr={"2"}
                      fontSize={"18"}
                      fontWeight={"600"}
                    >
                      {"Digital Dummy"}
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
                    {"IT Services"}
                  </Text>
                </View>
              </View>
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
