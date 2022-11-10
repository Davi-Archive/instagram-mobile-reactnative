import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { IPost } from "./types";
import * as FeedService from '../../../_services/FeedService'

const Post = (props: { post: IPost }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(props.post.likes.length);
  const toggleLike = async () => {
    setLiked(!liked);
    try {
      await FeedService.toggleLike(props.post.id);
      if (liked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert("Erro", "Erro ao efetuar a curtida");
    }
  };
  return (
    <View style={styles.containerPost}>
      <View style={styles.containerUser}>
        <TouchableOpacity>
          <Image
            style={styles.imageUser}
            source={
              props.post.user.avatar
                ? { uri: props.post.user.avatar }
                : require("../../../_assets/images/user.png")
            }
          />
          <Text>{props.post.user.name}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Image style={styles.postImage} source={{ uri: props.post.image }} />
      </View>
      <View style={styles.containerLikeAndComment}>
        <TouchableOpacity onPress={() => toggleLike()}>
          <Image
            style={styles.icon}
            source={
              liked
                ? require("../../../_assets/images/liked.png")
                : require("../../../_assets/images/notLiked.png")
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
