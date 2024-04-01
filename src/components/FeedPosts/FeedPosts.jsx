import {
  Container,
  VStack,
  Flex,
  SkeletonCircle,
  Skeleton,
  Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useState, useEffect } from "react";
const FeedPosts = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxWidth={"container.sm"} py={10} px={2}>
      {isloading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={"10"} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isloading && (
        <>
          <FeedPost
            img="/img1.png"
            username="burakorkmezz"
            avatar="/img1.png"
          />
          <FeedPost img="/img2.png" username="Josh" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="jonhdoe" avatar="/img3.png" />
          <FeedPost
            img="/LaDidiWaos.jpg"
            username="La Didi"
            avatar="/LaDidiWaos.jpg"
          />
          <FeedPost
            img="/img4.png"
            username="burakorkmezz"
            avatar="/img4.png"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
