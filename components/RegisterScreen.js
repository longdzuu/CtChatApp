import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
 const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {

  };

  return (
    <View style={styles.container}>
      {/* Logo (Bạn có thể thay thế phần này bằng hình ảnh logo của bạn) */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Ctchat</Text>

      {/* Form nhập liệu */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={text => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={text => setGender(text)}
      />

      <View style={styles.ButtonContainer}>
        <View style={styles.Button}>
          <Button
            title="Login" onPress={handleLogin}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ["#008c8a", "#F44336"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
          >
          </Button>
        </View>
        <View style={styles.Button}>
          <Button
            title="Register" onPress={handleRegister}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: ["#008c8a", "#F44336"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
          >
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#B3E3E7',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFF'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  }
  ,
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30
  }, Button: {
    flex: 1,
    marginHorizontal: 5,
  },
  logo: {
      width: 200,
      height: 200,
      marginBottom: 5,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
  },
});

export default RegisterScreen;
