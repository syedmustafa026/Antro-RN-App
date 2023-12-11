import React, { useState, useEffect } from "react";
import { Image, View, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { Box, Text } from "../../components";
import { AntroLogo, BackLeftArrow, BellIcon, Wave } from "../../assets/svg";
import { ProfileBox } from "../../components/CustomComponents/ProfileBox";
import ProfileModal1 from "../../components/CustomComponents/ProfileModal1";
import { OtherProfileBox } from "../../components/CustomComponents/OtherProfile";
import { ProfileCreateBox } from "../../components/CustomComponents/ProfileCreateBox";

const Profiles = ({ navigation }) => {
  const [profileModal, setProfileModal] = useState(false);
  const [profileModa2, setProfileModa2] = useState(false);

  return (
    <ScrollView>
      <ProfileModal1
        setModalVisible={setProfileModal}
        setModa2lVisible={setProfileModa2}
        modal2Visible={profileModa2}
        visible={profileModal}
      />
      <Box flex={1} padding={"8"}>
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
              {"Profiles"}
            </Text>
          </View>
        </View>
        <ProfileBox />
        <OtherProfileBox />
        <ProfileCreateBox />
      </Box>
    </ScrollView>
  );
};

export default Profiles;
