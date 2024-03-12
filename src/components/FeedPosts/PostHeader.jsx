import { Box, Flex, Link } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      p={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/img1.png" alt="user profile pic" size={"sm"} />
      </Flex>
      <Box></Box>
    </Flex>
  );
};

export default PostHeader;
