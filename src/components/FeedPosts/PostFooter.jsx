import {
  Box,
  Button,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(100);

  const handleClick = () => {
    setLiked(!liked);
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };
  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={2} mb={2} mt={"auto"}>
        <Box onClick={handleClick} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontSize={"sm"} fontWeight={"600"}>
        {likes} Likes
      </Text>
      <Text fontSize={"sm"} fontWeight={"700"}>
        {username}_{"  "}
        <Text as={"span"} fontWeight={"400"}>
          Feeling happy
        </Text>
      </Text>

      <Text fontSize={"sm"} color={"gray"}>
        View all 10000 comments
      </Text>

      {/* <Input type="text" variant={"flushed"} width={"full"}>
        <InputRightElement>
          <Button>Como</Button>
        </InputRightElement>
      </Input> */}

      <InputGroup width={"full"}>
        <Input
          variant={"flushed"}
          type={"text"}
          fontSize={14}
          // placeholder="Add a comment..."
          placeholder={"Add a comment..."}
        />
        <InputRightElement width="4.5rem">
          <Button
            variant={"ghost"}
            h="1.75rem"
            size="sm"
            // sas
            color={"blue.500"}
            cursor={"pointer"}
            fontSize={14}
            _hover={{ color: "white", transition: "color 0.3s ease-in-out" }}
            bd={"transparent"}
          >
            POST
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default PostFooter;
