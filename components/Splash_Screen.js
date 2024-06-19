import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/loading.gif')} style={styles.loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3E3E7',
  },
  logo: {
    width: 500,
    height: 400,
  },
  loading: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default SplashScreen;
