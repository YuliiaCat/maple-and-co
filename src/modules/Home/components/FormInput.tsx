import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/fonts";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface IFormInput {
  placeholder: string;
  value: string;
  onChange: () => void;
  isDescription?: boolean;
}

const FormInput: React.FC<IFormInput> = ({ placeholder, value, onChange, isDescription }) => {
  return (
    <TextInput
      style={[styles.inputContainer, isDescription && styles.description]}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={Colors.greyPlaceholder}
      multiline={isDescription}
      numberOfLines={isDescription ? 4 : 1}
      textAlignVertical={isDescription ? "top" : "center"}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.greyPlaceholder,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    fontFamily: Fonts.MulishRegular,
    fontSize: 16,
    backgroundColor: Colors.white,
  },
  description: {
    minHeight: 120,
    paddingTop: 14,
  },
});

export default FormInput;
