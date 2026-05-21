import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { KeyboardProvider } from "react-native-keyboard-controller";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Mulish-Light": require("~/assets/fonts/Mulish-Light.ttf"),
    "Mulish-Regular": require("~/assets/fonts/Mulish-Regular.ttf"),
    "Mulish-Medium": require("~/assets/fonts/Mulish-Medium.ttf"),
    "Mulish-Bold": require("~/assets/fonts/Mulish-Bold.ttf"),
    "Mulish-SemiBold": require("~/assets/fonts/Mulish-SemiBold.ttf"),
  });

  const routeName = usePathname();
  useEffect(() => {
    console.log({ routeName });
  }, [routeName]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </KeyboardProvider>
  );
};

export default RootLayout;
