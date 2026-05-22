import { CloseIcon, SearchIcon } from "@/components/ui";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/fonts";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

interface ICategorySearch {
  value: string;
  setValue: (v: string) => void;
}

const CategorySearch: React.FC<ICategorySearch> = ({ value, setValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <SearchIcon />
      </View>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Search"
        placeholderTextColor={Colors.greyPlaceholder}
        style={styles.input}
      />
      {value && value.length !== 0 && (
        <TouchableOpacity
          onPress={() => {
            setValue("");
          }}
        >
          <CloseIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.greyPlaceholder,
    marginHorizontal: 20,
    height: 40,
  },
  icon: {
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginHorizontal: 12,
    fontFamily: Fonts.MulishMedium,
    fontSize: 15,
  },
});

export default CategorySearch;
