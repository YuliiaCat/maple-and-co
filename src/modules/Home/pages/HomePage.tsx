import MainLayout from "@/components/layout/MainLayout";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { Form } from "../components";

const HomePage = () => {
  return (
    <MainLayout title="Create a Business Listing">
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
        extraKeyboardSpace={40}
      >
        <Form />
      </KeyboardAwareScrollView>
    </MainLayout>
  );
};

export default HomePage;
