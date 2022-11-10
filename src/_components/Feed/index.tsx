import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { IUserData } from "../../_services/UserService/types";
import * as FeedService from "../../_services/FeedService";
import { IPost } from "./Post/types";
import { useNavigation } from "@react-navigation/native";
import Post from "./Post";
import Loading from "../Container/Loading";

const Feed = (props: { isProfileFeed?: boolean; profile?: IUserData }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    loadPosts();
    navigation.addListener("Focus", () => {
      loadPosts();
    });
  }, [posts]);

  const loadPosts = async () => {
    if ((props.isProfileFeed && props.profile?.id) || !props.isProfileFeed) {
      try {
        setIsLoading(true);
        const { data } = await FeedService.getPosts(props?.profile?.id);
        const postsFormated: IPost[] = data.map((post: any) => {
          const postFormated: IPost = {
            id: post._id,
            image: post.foto,
            description: post.descricao,
            user: {
              name: post.usuario.nome,
              avatar: post.usuario.avatar,
              id: "",
              email: "",
              token: ""
            },
            comments: post.comentario.map((e: any) => {
              return {
                name: e.nome,
                message: e.message,
                userId: e.usuarioId
              };
            }),
            likes: post.likes
          };
          return postFormated;
        });
        setIsLoading(false);

        setPosts(postsFormated);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };
  return (
    <View>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (<Post />) }
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => <Loading isLoading={isLoading} />}
        />
    </View>
  );
};

export default Feed;
