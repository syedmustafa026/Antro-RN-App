import React, { useState } from "react"
import { Image, View, ScrollView, TouchableOpacity } from "react-native"
import { Box, Text } from "../../components"
import { AntroLogo, BellIcon, Wave } from "../../assets/svg"
import { NewProfileBox } from "../../components/CustomComponents/NewProfileBox"
import { ProfileBox } from "../../components/CustomComponents/ProfileBox"
import ProfileModal1 from "../../components/CustomComponents/ProfileModal1"

const Home = ({ navigation }) => {
  const [profileModal, setProfileModal] = useState(false)

  return (
    <ScrollView>
      <ProfileModal1
        setModalVisible={setProfileModal}
        visible={profileModal}
      />
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
                  uri: "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg",
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
        <ProfileBox navigation={navigation} />
        <Text
          color={"#000000"}
          mt={"8"}
          ml={"2"}
          fontSize={"16"}
          fontWeight={"600"}
        >
          {"Explore new Profiles"}
        </Text>
        <NewProfileBox navigation={navigation} />
        <NewProfileBox navigation={navigation} />
        <NewProfileBox navigation={navigation} />
      </Box>
    </ScrollView>
  )
}

export default Home
