import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserItem = ({ avatar, name, message, isOnline }) => {
  const truncatedMessage = message.length > 50 ? `${message.substring(0, 50)}...` : message;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        {isOnline && <View style={styles.statusIndicator}></View>}
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{truncatedMessage}</Text>
        </View>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop:20,
    marginRight:30
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50', // Màu xanh cho trạng thái online
    borderWidth: 2,
    borderColor: '#FFF',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  messageContainer: {
    position: 'absolute',
    top: '-50%', // Đặt message ở giữa avatar theo chiều cao
    left: '20%', // Đặt message ở giữa avatar theo chiều rộng
    transform: [{ translateX: -25 }], // Dịch chuyển message sang trái để nó đè lên avatar
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Màu nền của message container
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    zIndex: 10, // Đảm bảo message hiển thị trên avatar
  },
  message: {
    color: '#666',
    fontSize: 12,
  },
});

export default UserItem;
