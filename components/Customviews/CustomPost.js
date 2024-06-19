import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Post = ({ userImage, userName, caption, postImage, isPublic, likes }) => {
  const [likeCout, setLikes] = useState(likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likeCout - 1);
    } else {
      setLikes(likeCout + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.postContainer}>
        {/* Top show */}
      <View style={styles.postHeader}>
        {/* Avate */}
        <Image source={{ uri: userImage }} style={styles.userImage} />
        {/* Name */}
        <Text style={styles.userName}>{userName}</Text>
        {/* Object */}
        {isPublic ? (
          <Icon name="globe" size={18} color="#007bff" style={styles.icon} />
        ) : (
          <Icon name="lock-closed" size={18} color="#6c757d" style={styles.icon} />
        )}
      </View>
       {/* caption */}
      <Text style={styles.caption}>{caption}</Text>
        {/* Image-Post */}
      {postImage ? <Image source={{ uri: postImage }} style={styles.postImage} /> : null}
      {/* Function */}
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <Icon
            name={liked ? 'thumbs-up' : 'thumbs-up-outline'}
            size={18}
            color={liked ? '#007bff' : '#000'}
            style={styles.actionIcon}
          />
          {/* Text like */}
          <Text style={[styles.actionText, { color: liked ? '#007bff' : '#000' }]}>
            {likeCout} {likes === 1 ? 'Like' : 'Likes'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbox" size={18} color="#000" style={styles.actionIcon} />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="share" size={18} color="#000" style={styles.actionIcon} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  icon: {
    marginRight: 5,
  },
  caption: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginRight: 5,
  },
  actionText: {
    color: '#000',
  },
});

export default Post;
