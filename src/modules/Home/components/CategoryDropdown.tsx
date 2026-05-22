import { ChevronDownIcon } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/fonts";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CategoryDropdownProps {
  value: string;
  onChange: (value: string) => void;
  categories: string[];
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  value,
  onChange,
  categories,
  isOpen,
  setIsOpen,
}) => {
  const handleSelect = (category: string) => {
    onChange(category);
    setIsOpen(false);
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.dropdown}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={[styles.selectedText, !value && styles.placeholderText]}>
          {value || "Category"}
        </Text>

        {isOpen ? (
          <View style={styles.arrow}>
            <ChevronDownIcon />
          </View>
        ) : (
          <ChevronDownIcon />
        )}
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsContainer}>
          {categories.map((item) => (
            <TouchableOpacity key={item} style={styles.option} onPress={() => handleSelect(item)}>
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.greyPlaceholder,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    fontFamily: Fonts.MulishRegular,
    fontSize: 16,
    backgroundColor: Colors.white,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectedText: {
    flex: 1,
    fontFamily: Fonts.MulishRegular,
    fontSize: 16,
  },
  placeholderText: {
    color: Colors.greyPlaceholder,
  },
  arrow: {
    transform: [{ rotate: "180deg" }],
  },
  optionsContainer: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 18,
    backgroundColor: Colors.white,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  optionText: {
    fontFamily: Fonts.MulishMedium,
    fontSize: 15,
  },
});

export default CategoryDropdown;
