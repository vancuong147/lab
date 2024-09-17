import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Màn hình cài đặt
const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  );
};

// Style cho màn hình Settings
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
