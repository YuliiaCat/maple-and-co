import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/fonts";
import React from "react";
import { StyleSheet, Text } from "react-native";

interface ISharedTitle {
  title?: string;
}

const SharedTitle: React.FC<ISharedTitle> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.MulishSemiBold,
    fontSize: 26,
    color: Colors.darkOlive,
    paddingVertical: 10,
  },
});

export default SharedTitle;
