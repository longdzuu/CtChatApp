import React from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView } from 'react-native';
import MessengerItem from '../Customviews/CustomMessItem';
import UserItem from '../Customviews/CustomMessIcon';
// Dữ liệu mẫu tin nhắn
const data = [
    {
      id: '1',
      avatar: 'https://via.placeholder.com/50',
      name: 'John Doe',
      lastMessage: 'Hello there, how are you?',
      time: '10:30 AM',
    },
    {
      id: '2',
      avatar: 'https://via.placeholder.com/50',
      name: 'Jane Doe',
      lastMessage: 'Hey! What are you up to?',
      time: 'Yesterday',
    },
    {
        id: '3',
        avatar: 'https://via.placeholder.com/50',
        name: 'Long',
        lastMessage: 'Hello there, how are you?',
        time: '10:30 AM',
      },
      {
        id: '4',
        avatar: 'https://via.placeholder.com/50',
        name: 'Hai',
        lastMessage: 'Hey! What are you up to?',
        time: 'Yesterday',
      },{
        id: '5',
        avatar: 'https://via.placeholder.com/50',
        name: 'John Doe',
        lastMessage: 'Hello there, how are you?',
        time: '10:30 AM',
      },
      {
        id: '6',
        avatar: 'https://via.placeholder.com/50',
        name: 'Jane Doe',
        lastMessage: 'Hey! What are you up to?',
        time: 'Yesterday',
      },
      {
          id: '7',
          avatar: 'https://via.placeholder.com/50',
          name: 'Long',
          lastMessage: 'Hello there, how are you?',
          time: '10:30 AM',
        },
        {
          id: '8',
          avatar: 'https://via.placeholder.com/50',
          name: 'Hai',
          lastMessage: 'Hey! What are you up to?',
          time: 'Yesterday',
        },
  ];


const MessengerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listTop}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item) => (
            <UserItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              message={item.lastMessage}
              isOnline={true} // Giả sử tất cả đều online
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.listBot}>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MessengerItem
              avatar={item.avatar}
              name={item.name}
              lastMessage={item.lastMessage}
              time={item.time}
            />
          )}
        />
      </View>
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
  listBot: {
    flex: 1,
    backgroundColor: '#FFF', // Màu nền của listBot
    width: '100%', // Đảm bảo chiều rộng của FlatList là 100%
  },
  listTop: {
    width: '100%', // Chiều cao của listTop
    marginBottom: 10,
    marginLeft: 30,
  },
});

export default MessengerScreen;
