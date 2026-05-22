import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/fonts";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useBusinessStore } from "~/store";
import IFormValues from "~/types/form";
import { categories } from "../data/categories";
import CategoryDropdown from "./CategoryDropdown";
import FormInput from "./FormInput";

interface IForm {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const Form: React.FC<IForm> = ({ isOpen, setIsOpen }) => {
  const { control, handleSubmit, reset } = useForm<IFormValues>({
    defaultValues: {
      businessName: "",
      category: "",
      shortDescription: "",
    },
  });
  const { addBusiness } = useBusinessStore();

  const onSubmit = (data: IFormValues) => {
    addBusiness(data);

    Alert.alert("Success", "Business added successfully");
    reset();
  };

  const categoriesList = categories.map((item) => item.name);

  return (
    <View style={styles.container}>
      <View style={styles.controller}>
        <Controller
          control={control}
          name="businessName"
          rules={{ required: "Business name is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <FormInput value={value} onChange={onChange} placeholder="Business name" />
              {error && <Text style={styles.error}>{error.message}</Text>}
            </>
          )}
        />
        <Controller
          control={control}
          name="category"
          rules={{ required: "Category is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <CategoryDropdown
                value={value}
                onChange={onChange}
                categories={categoriesList}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
              {error && <Text style={styles.error}>{error.message}</Text>}
            </>
          )}
        />

        <Controller
          control={control}
          name="shortDescription"
          rules={{ required: "Short description is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <FormInput
                value={value}
                onChange={onChange}
                placeholder="Short Description"
                isDescription
              />
              {error && <Text style={styles.error}>{error.message}</Text>}
            </>
          )}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    gap: 45,
  },
  controller: {
    gap: 16,
  },
  error: {
    fontFamily: Fonts.MulishMedium,
    color: Colors.primaryRed,
    fontSize: 16,
    marginTop: -10,
  },
  btn: {
    width: "100%",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: Colors.buttonGreen,
    borderRadius: 20,
    borderColor: Colors.lightGrey,
  },
  btnText: {
    fontFamily: Fonts.MulishBold,
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default Form;
