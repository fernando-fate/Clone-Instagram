import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../Profile/ProfileHeader";
import ProfileTabs from "../Profile/ProfileTabs";
import ProfilePosts from "../Profile/ProfilePosts";
const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5} style={{ border: "solid red 1px" }}>
      <Flex
        style={{ border: "solid blue 2px" }}
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        maxW={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        <ProfileHeader />
      </Flex>
      <Flex>
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
