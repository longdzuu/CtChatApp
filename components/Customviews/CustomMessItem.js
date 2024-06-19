import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MessengerItem = ({ avatar, name, lastMessage, time }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.messageContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text numberOfLines={1} style={styles.lastMessage}>
          {lastMessage}
        </Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lastMessage: {
    color: '#666',
  },
  time: {
    marginLeft: 'auto',
    color: '#999',
  },
});

export default MessengerItem;
