import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Container from "../../_components/Container";
import Feed from "../../_components/Feed";
import UserInfo from "../../_components/UserInfos";
import * as UserService from "../../_services/UserService";
import { IUser, IUserData } from "../../_services/UserService/types";

const Profile = () => {
  const navigation = useNavigation();
  const profileParams = navigation
    .getState()
    .routes.find((route) => route.name == "Profile")?.params;
  const [userLogged, setUserLogged] = useState<IUser>();
  const [profile, setProfile] = useState<IUserData>();

  useEffect(() => {
    navigation.addListener("focus", () => {
      getProfile();
    });
  }, []);

  const getProfile = async () => {
    try {
      const user = await UserService.getCurrentUser();
      setUserLogged(user);
      let profile;
      if (profileParams && profileParams.id) {
        profile = await UserService.getProfile(profileParams.id);
      } else if (user && user.id) {
        profile = await UserService.getProfile(user.id);
      }

      if (profile) {
        console.log(profile.data)
        const profileFormated: IUserData = {
          id: profile.data._id,
          name: profile.data.nome,
          avatar: profile.data.avatar,
          email: profile.data.email,
          posts: profile.data.publicacoes,
          followers: profile.data.seguidores,
          following: profile.data.seguindo,
          followThisUser:
            profile.data.segueEsseUsuario != undefined
              ? profile.data.segueEsseUsuario
              : false
        };
        setProfile(profileFormated);
      }
    } catch (error) {
      console.log(error + " :: error on profile component");
      Alert.alert("erro ao carregar perfil, tente novamente");
    }
  };
  return (
    <>
    <Container
      headerProps={{
        profileHeader: {
          userName: profile?.name || "",
          isExternalProfile: userLogged?.id == profile?.id ? false : true
        }
      }}
      footerProps={{
        currentTab: userLogged?.id == profile?.id ? "Profile" : "Home"
      }}>
      <View>
        {profile && userLogged && (
          <UserInfo userLogged={userLogged} profile={profile} />
        )}
        <Feed isProfileFeed={true} profile={profile} />
      </View>
    </Container>
    </>
  );
};

export default Profile;
