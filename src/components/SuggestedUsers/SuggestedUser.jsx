import { Flex, Avatar, VStack, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
const SuggestedUser = ({ followers, name, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex gap={2} alignItems={"center"}>
        <Avatar name={name} size="md" src={avatar}></Avatar>

        <VStack alignItems={"flex-start"} spacing={0}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={12} fontWeight={"bold"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        fontWeight={"medium"}
        h={"max-content"}
        cursor={"pointer"}
        color={"blue.400"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
