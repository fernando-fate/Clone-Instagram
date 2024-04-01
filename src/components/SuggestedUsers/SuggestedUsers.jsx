import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"gray.400"}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />
      <Box fontSize={12} color={"gray.500"}>
        2024 Built by{" "}
        <Link
          href="https://www.linkedin.com/in/fernando-moreira-08b2b51a4/"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          As a Programmer
        </Link>
      </Box>
    </VStack>
  );
}
