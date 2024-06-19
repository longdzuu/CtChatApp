import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Love Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default LoveScreen;
