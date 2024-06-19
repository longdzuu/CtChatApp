import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FriendItem = ({ avatar, name, isFriend, onPress }) => {
  const [friendStatus, setFriendStatus] = useState(isFriend);

  const handlePress = () => {
    setFriendStatus(!friendStatus); // Đảo ngược trạng thái bạn bè
    onPress(); // Gọi lại hàm onPress để xử lý logic khi nhấn nút
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>{friendStatus ? 'Add Friend' : 'Friend'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default FriendItem;
