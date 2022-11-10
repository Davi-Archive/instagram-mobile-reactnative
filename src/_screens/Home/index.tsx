import { Text, View } from "react-native";
import Container from "../../_components/Container";


const Home = () => {
  return (
    <Container
      headerProps={{ default: true }}
      footerProps={{ currentTab: "Home" }}>
    <View>
        <Text>
            hi
        </Text>
    </View>
    </Container>
  );
};

export default Home;
