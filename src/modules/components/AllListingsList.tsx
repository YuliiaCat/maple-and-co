import React from "react";
import { FlatList, StyleSheet } from "react-native";
import IFormValues from "~/types/form";
import BusinessItem from "./BusinessItem";

interface IAllListingsList {
  businesses?: IFormValues[];
}

const AllListingsList: React.FC<IAllListingsList> = ({ businesses }) => {
  return (
    <FlatList
      data={businesses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <BusinessItem
          name={item.businessName}
          category={item.category}
          description={item.shortDescription}
        />
      )}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
});

export default AllListingsList;
