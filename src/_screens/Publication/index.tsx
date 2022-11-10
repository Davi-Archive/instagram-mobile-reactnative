import Container from "../../_components/Container";
import Feed from "../../_components/Feed";

const Publication = () => {
  return (
    <Container
      headerProps={{ default: true }}
      footerProps={{ currentTab: "Publication" }}>
      <Feed />
    </Container>
  );
};

export default Publication;
