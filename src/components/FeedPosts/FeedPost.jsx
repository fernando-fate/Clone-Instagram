import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = () => {
  return (
    <div>
      <PostHeader />
      <Box>
        <Image src="/img1.png" />
      </Box>
      <PostFooter />
    </div>
  );
};

export default FeedPost;
