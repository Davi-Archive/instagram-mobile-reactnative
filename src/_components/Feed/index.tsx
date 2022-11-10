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
  }, [props]);

  const loadPosts = async () => {
    if ((props.isProfileFeed && props.profile?.id) || !props.isProfileFeed) {
      try {
        setIsLoading(true);
        const { data } = await FeedService.getPosts(props?.profile?.id);

        if (!data) return;
          const postsFormated:IPost[] = data.result.map((post: any) => {
          const postFormated:IPost = {
            id: post?._id,
            image: post?.foto,
            description: post?.descricao,
            user: {
              name: post?.usuario?.nome || props.profile?.name,
              avatar: post?.usuario?.avatar||props.profile?.avatar,
              id: "",
              email: "",
              token: ""
            },
            comments: post?.comentarios?.map((e: any) => {
              return {
                name: e?.nome,
                message: e?.comentario,
                userId: e?.usuarioId
              };
            }),
            likes: post?.likes
          };
          return postFormated;
        });
        setPosts(postsFormated);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error + " feed");
      }
    }
  };
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post post={item}/>}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => <Loading isLoading={isLoading} />}
      />
    </View>
  );
};

export default Feed;
