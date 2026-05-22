import { categoryColorMap, categoryColors } from "@/constants/categoryColors";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/fonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IBusinessItem {
  name?: string;
  category?: string;
  description?: string;
}

const BusinessItem: React.FC<IBusinessItem> = ({ name, category, description }) => {
  const colorKey = category ? (categoryColorMap[category] ?? "green") : "green";

  const badgeColors = categoryColors[colorKey];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: badgeColors.backgroundColor,
              borderColor: badgeColors.borderColor,
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: badgeColors.textColor,
              },
            ]}
          >
            {category}
          </Text>
        </View>
      </View>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.lightOlive,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,

    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,

    borderWidth: 1,
    borderColor: Colors.borderCard,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontFamily: Fonts.MulishExtraBold,
    fontSize: 18,
    color: Colors.darkOlive,
  },
  badge: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
  },
  badgeText: {
    fontFamily: Fonts.MulishBold,
    fontSize: 12,
  },
  description: {
    fontFamily: Fonts.MulishRegular,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.deepOlive,
  },
});

export default BusinessItem;
