import { Box, Container, Flex } from "@chakra-ui/react";
import "./style.css";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
export const HomePage = () => {
  return (
    <Container maxWidth={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10} border={"solid 1px blue"}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          border={"solid 1px red"}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestedUsers></SuggestedUsers>
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
