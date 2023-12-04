import React, { useState } from "react";
import { Image, View, ScrollView, TouchableOpacity } from "react-native";
import { Box, Text } from "../../components";
import { AntroLogo, BellIcon, Wave } from "../../assets/svg";
import { NewProfileBox } from "../../components/CustomComponents/NewProfileBox";
import { ProfileBox } from "../../components/CustomComponents/ProfileBox";
import ProfileModal1 from "../../components/CustomComponents/ProfilesModal1";

const Home = ({ navigation }: any) => {
  const [profileModal, setProfileModal] = useState(false);

  return (
    <ScrollView>
      <ProfileModal1 setModalVisible={setProfileModal} visible={profileModal} />
      <Box flex={1} padding={"8"}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntroLogo />
            <Text
              color={"#000000"}
              ml={"2"}
              mr={"2"}
              fontSize={"26"}
              fontWeight={"bold"}
            >
              {"Antro"}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <BellIcon />
            <TouchableOpacity onPress={() => setProfileModal(true)}>
              <Image
                style={{
                  width: 32.86,
                  height: 32,
                  flexShrink: 0,
                  borderRadius: 12,
                  marginLeft: 21,
                }}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/7fdc/cc78/3264eedc4fb989984eecbc4058a219f2?Expires=1702252800&Signature=fcIa1eKN4Pc1bXBeAS2EYMT1uweksCZDrrBQAbcqv4y415H~UCAJsBD-N78QRXHlZ8nArHivq1jMRUkBDMFB3GIFFMIf33gLXrove~~ddZ3BujUYWtago0NMyTI1HOaxyodRURBeJ1Ul0Z3QNq1h8a0z4RFseSW0Z5JxeIvVe7TVzBTfDdSdDNM-eyRkUwTsxuj1gQVAivl~n7rGWAFls5tmwPgrSbZeUG1l~YtZCY-Mj4VA-kYqEYQD0nnDWHB-RRE0aMoIuUljShb2PbCWIGaQKOmlzzFm3g2g4XnGsMNi9Cb8RmcKEMz-8voNFP7w3C8TzZbZu9Jv4~94BCE0Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 48 }}
        >
          <Text color={"#000000"} mr={"2"} fontSize={"26"} fontWeight={"bold"}>
            {"Hello Sam"}
          </Text>
          <Wave />
        </View>
        <Text color={"#000000"} mt={"1"} fontSize={"16"} fontWeight={"medium"}>
          {"Let's Increase your social reach."}
        </Text>
        <Text
          color={"#000000"}
          mt={"8"}
          ml={"2"}
          fontSize={"16"}
          fontWeight={"600"}
        >
          {"Active Profiles"}
        </Text>
        <ProfileBox />
        <Text
          color={"#000000"}
          mt={"8"}
          ml={"2"}
          fontSize={"16"}
          fontWeight={"600"}
        >
          {"Explore new Profiles"}
        </Text>
        <NewProfileBox />
        <NewProfileBox />
        <NewProfileBox />
      </Box>
    </ScrollView>
  );
};

export default Home;
