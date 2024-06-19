import React from 'react';
import { View, TextInput,Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import FriendItem from '../Customviews/CustomItemFriend';
import { useState } from 'react';

const data = [
    { id: '1', avatar: 'https://via.placeholder.com/50', name: 'John Doe', isFriend: true },
    { id: '2', avatar: 'https://via.placeholder.com/50', name: 'Jane Doe', isFriend: false },
    // Thêm các bạn bè khác vào đây nếu cần thiết
  ];

const FriendScreen = () => {
    const [searchText, setSearchText] = useState('');

    const handlePress = (friendId) => {
        // Xử lý logic khi người dùng nhấn vào nút "Add Friend" hoặc "Friend"
        console.log(`Button pressed for friend with ID: ${friendId}`);
      };
      const handleSearch = () => {
        // Xử lý logic tìm kiếm dựa vào searchText
        console.log(`Searching for: ${searchText}`);
      };
  return (
    <View style={styles.container}>
      <View style={styles.search}>
      <TextInput
          style={styles.input}
          placeholder="Search friends..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listFriend}>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FriendItem
              avatar={item.avatar}
              name={item.name}
              isFriend={item.isFriend}
              onPress={() => handlePress(item.id)}
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
  listFriend: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    borderWidth: 1,
    borderRadius:10,
    paddingLeft:20,
  },
  search: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: '#E8E8E8',
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FriendScreen;
