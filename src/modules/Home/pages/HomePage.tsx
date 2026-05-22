import MainLayout from "@/components/layout/MainLayout";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Form } from "../components";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainLayout title="Create a Business Listing">
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        extraKeyboardSpace={40}
        scrollEnabled={isOpen}
      >
        <Form isOpen={isOpen} setIsOpen={setIsOpen} />
      </KeyboardAwareScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default HomePage;
