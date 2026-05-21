import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import { View } from 'react-native';
import { useBusinessStore } from '~/store';

const AllListingsPage = () => {
  const { businesses } = useBusinessStore();

  return (
    <MainLayout title="View All Listings">
      <View></View>
    </MainLayout>
  );
};

export default AllListingsPage;