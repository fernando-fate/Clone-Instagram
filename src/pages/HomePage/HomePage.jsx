import { Box, Container, Flex } from "@chakra-ui/react";
import "./style.css";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
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
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
