import React from "react";
import { Box, Button, Text } from "../../components";
import { appColor } from "../../constants/colors";
import { Check, OkLogo } from "../../assets/svg";
import { appStyles } from "../../styles";
import { FlatList } from "native-base";
import { SCREEN_NAMES } from "../../constants";

const Welcome = ({ navigation }: any) => {
  const btnAgreeHandler = () => {
    navigation.navigate(SCREEN_NAMES.fullname);
  };

  const flatListItem = ({ item, index }: any) => {
    return (
      <Box key={index?.toString()} mt={"3.5"}>
        <Box
          flexDirection={"row"}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <Check />
          <Box ml={"4"}>
            <Text fontSize={16} fontWeight={"semibold"}>
              {"Ipsum dolor"}
            </Text>
            <Text color={"#8391A1"}>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box flex={1} bgColor={appColor.white} justifyContent={"center"} px={"8"}>
      <Box alignItems={"center"}>
        <OkLogo />
      </Box>
      <Box style={appStyles.marginTop}>
        <Text fontWeight={"semibold"} color={"#050B1E"} fontSize={"28"}>
          {"Welcome to Antro"}
        </Text>
        <Text fontWeight={"normal"} mt={"3"} color={"#8391A1"}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          }
        </Text>
      </Box>
      <Box style={appStyles.marginTop}>
        <FlatList data={new Array(4)} renderItem={flatListItem} />
      </Box>
      <Box style={appStyles.marginTop}>
        <Button onPress={btnAgreeHandler}>
          <Text
            color={appColor.white}
            style={appStyles.btn}
            fontWeight={"semibold"}
          >
            {"I Agree"}
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
