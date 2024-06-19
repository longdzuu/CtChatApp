import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomPost from './Customviews/CustomPost';
import ImagePicker from 'react-native-image-picker';

const samplePosts = [
  {
    id: '1',
    userImage: 'https://via.placeholder.com/50',
    userName: 'John Doe',
    caption: 'This is a sample post caption',
    postImage: 'https://via.placeholder.com/200',
    isPublic: true,
    likes: 10,
  },
  // Thêm các bài đăng khác ở đây
];

const ProfileScreen = ({ navigation }) => {
  const [coverImage, setCoverImage] = useState('https://via.placeholder.com/800x400');
  const [avatarImage, setAvatarImage] = useState('https://via.placeholder.com/150');
  const [isFriend, setIsFriend] = useState(true);

  const handleImagePicker = (setImage) => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source.uri);
      }
    });
  };

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Image source={{ uri: coverImage }} style={styles.coverImage} />
        <TouchableOpacity style={styles.coverCameraIcon} onPress={() => handleImagePicker(setCoverImage)}>
          <Icon name="camera" size={24} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: avatarImage }} style={styles.avatar} />
          <TouchableOpacity style={styles.avatarCameraIcon} onPress={() => handleImagePicker(setAvatarImage)}>
            <Icon name="camera" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.caption}>This is a sample caption.</Text>
      </View>
      <View style={styles.friendSection}>
        <View style={styles.friendInfo}>
          <Text style={styles.friendTitle}>Bạn bè</Text>
          <Text style={styles.friendCount}>100</Text>
        </View>
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate('FriendListScreen')}>
          <Text style={styles.viewButtonText}>Xem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={samplePosts}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => (
        <CustomPost
          userImage={item.userImage}
          userName={item.userName}
          caption={item.caption}
          postImage={item.postImage}
          isPublic={item.isPublic}
          likes={item.likes}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    position: 'relative',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  coverCameraIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
  },
  avatarContainer: {
    position: 'absolute',
    bottom: -40,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  avatarCameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 5,
  },
  profileDetails: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  friendSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendInfo: {
    alignItems: 'center',
  },
  friendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendCount: {
    fontSize: 16,
    color: '#666',
  },
  viewButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  viewButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
