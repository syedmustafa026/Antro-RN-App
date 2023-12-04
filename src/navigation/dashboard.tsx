import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, MenuBar, PlainMessageIcon, SearchIcon } from "../assets/svg";
import { appColor } from "../constants/colors";
import { Designation, Home, FullName, Birthday } from "../screens";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: appColor.black,
        tabBarLabelStyle: { marginBottom: 15, color: "#707070" },
        tabBarStyle: {
          height: 70,
          paddingTop: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeIcon />,
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => <SearchIcon />,
        }}
        name="Search"
        component={FullName}
      />

      <Tab.Screen
        options={{
          title: "Messages",
          headerShown: false,
          tabBarIcon: ({ focused }) => <PlainMessageIcon />,
        }}
        name="Messages"
        component={Birthday}
      />

      <Tab.Screen
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ focused }) => <MenuBar />,
        }}
        name="Menu"
        component={Designation}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
