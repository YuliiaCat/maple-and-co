import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import SharedTitle from '../SharedTitle';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';

interface IMainLayout {
  children: ReactNode;
  title?: string;
}

const MainLayout: React.FC<IMainLayout> = ({ children, title }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea} edges={{ top: "maximum", bottom: "off" }}>
      <View style={styles.container}>
        <SharedTitle title={title} />
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
  },
});

export default MainLayout;