import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList  } from 'react-native';
import Post from '../Customviews/CustomPost';

const logo = require('../../assets/logo.png');
const HomeScreen = () => {

    const posts = [
        {
            id: '1',
            userImage: 'https://via.placeholder.com/40',
            userName: 'User 1',
            caption: 'This is a caption for post 1',
            postImage: 'https://via.placeholder.com/200',
            isPublic: true,
            likes: 10,
          },
          {
            id: '2',
            userImage: 'https://via.placeholder.com/40',
            userName: 'User 2',
            caption: 'This is a caption for post 2',
            postImage: null, // Không có ảnh
            isPublic: false,
            likes: 5,
          },
    ];

    const renderItem = ({ item }) => (
        <Post
          userImage={item.userImage}
          userName={item.userName}
          caption={item.caption}
          postImage={item.postImage}
          isPublic={item.isPublic}
          likes={item.likes}
        />
      );

    return (
        <View style={styles.container}>
            <View style={styles.topPost}>
                <Image
                    source={logo} // Đường dẫn đến ảnh người dùng
                    style={styles.userImage}
                />
                <TouchableOpacity style={styles.addPostButton}>
                    <Text style={styles.addPostText}>Thêm bài đăng...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.feelingsButton}>
                    <Text style={styles.feelingsText}>Cảm nghĩ</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listPost}>
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 10,
    },
    topPost: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    addPostButton: {
        flex: 1,
        height: 40,
        backgroundColor: '#E8E8E8',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    addPostText: {
        color: '#000',
    },
    feelingsButton: {
        height: 40,
        paddingHorizontal: 15,
        backgroundColor: '#D3D3D3',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    feelingsText: {
        color: '#000',
    },
    listPost: {
        flex: 1,
        // Nội dung của listPost
    },
});

export default HomeScreen;
