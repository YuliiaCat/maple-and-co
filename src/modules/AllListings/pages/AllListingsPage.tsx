import MainLayout from "@/components/layout/MainLayout";
import { Fonts } from "@/constants/fonts";
import { AllListingsList } from "@/modules/components";
import CategorySearch from "@/modules/components/CategorySearch";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useBusinessStore } from "~/store";

const AllListingsPage = () => {
  const [value, setValue] = useState("");
  const { businesses = [] } = useBusinessStore();

  if (!businesses || businesses.length === 0) {
    return (
      <MainLayout title="View All Listings">
        <Text style={styles.noBusinesses}>There are no added businesses yet</Text>
      </MainLayout>
    );
  }

  const searchValue = value.trim().toLowerCase();

  const filteredBusinesses = searchValue
    ? businesses.filter((business) => business.businessName.toLowerCase().includes(searchValue))
    : businesses;

  return (
    <MainLayout title="View All Listings">
      {businesses && <CategorySearch value={value} setValue={setValue} />}
      {filteredBusinesses.length === 0 ? (
        <Text style={styles.noBusinesses}>No businesses found</Text>
      ) : (
        <AllListingsList businesses={filteredBusinesses} />
      )}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  noBusinesses: {
    fontFamily: Fonts.MulishSemiBold,
    fontSize: 18,
    paddingHorizontal: 20,
  },
});

export default AllListingsPage;
