import React from "react";
import FastImage from "react-native-fast-image";
import { AppIntroImage } from "../../assets/images";
import { ArrowRight, PartyIcon } from "../../assets/svg";
import AppIntroSlider from "react-native-app-intro-slider";
import { SCREEN_NAMES } from "../../constants";
import { Button, Text } from "../../components";
import { styles } from "./styles";
import { Box } from "native-base";
import { appColor } from "../../constants/colors";

const AppIntro = ({ navigation }: any) => {
  const handleGetStarted = () => {
    navigation.navigate(SCREEN_NAMES.login);
  };

  return (
    <Box flex={1} bg={appColor.white} paddingX={"12"}>
      {/* <AppIntroSlider
        data={[]}
        renderItem={({ item, index }) => {
          return ( */}
      <Box flex={0.85} justifyContent={"center"}>
        <FastImage
          source={AppIntroImage}
          style={styles.appIntroImg}
          resizeMode="contain"
        />
        <Text fontWeight={"medium"} style={styles.appIntroTxtTitle}>
          {"Discover and find local"}
        </Text>
        <Text fontWeight={"normal"} style={styles.appIntroTxtDescription}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        </Text>
      </Box>
      {/*    );
        }}
      /> */}
      <Box flex={0.1} justifyContent={"flex-end"}>
        <Button onPress={handleGetStarted}>
          <Box flexDirection={"row"} alignItems={"center"}>
            <PartyIcon />
            <Text fontWeight={"semibold"} style={styles.appIntroBtn}>
              {"get started"}
            </Text>
            <ArrowRight />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default AppIntro;
