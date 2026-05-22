import { AllListingsIcon, HomeIcon } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/fonts";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React, { forwardRef } from "react";
import { Platform, Pressable } from "react-native";

const COLOR_INACTIVE = Colors.darkPrimary;
const COLOR_ACTIVE = Colors.primary;

const CustomTabButton = forwardRef<any, BottomTabBarButtonProps>(
  ({ android_ripple, ...props }, ref) => {
    return <Pressable ref={ref} {...props} android_ripple={null} />;
  }
);
CustomTabButton.displayName = "CustomTabButton";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLOR_ACTIVE,
        tabBarInactiveTintColor: COLOR_INACTIVE,
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarStyle: [
          {
            height: 90,
            paddingTop: 12,
            paddingHorizontal: 14,
            backgroundColor: "#FFFFFF",
            borderTopWidth: 0,
          },
          Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
            },
            android: {
              elevation: 10,
            },
          }),
        ],
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarButton: (props) => <CustomTabButton {...props} />,
          tabBarLabelStyle: { fontFamily: Fonts.MulishBold, fontSize: 11, paddingTop: 2 },
          tabBarIcon: ({ focused }) => (
            <HomeIcon stroke={focused ? COLOR_ACTIVE : COLOR_INACTIVE} />
          ),
        }}
      />

      <Tabs.Screen
        name="all-listings"
        options={{
          title: "All Listings",
          tabBarLabelStyle: { fontFamily: Fonts.MulishBold, fontSize: 11, paddingTop: 2 },
          tabBarButton: (props) => <CustomTabButton {...props} />,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AllListingsIcon stroke={focused ? COLOR_ACTIVE : COLOR_INACTIVE} />
          ),
        }}
      />
    </Tabs>
  );
}
