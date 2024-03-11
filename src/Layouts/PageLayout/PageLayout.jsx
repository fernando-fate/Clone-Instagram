import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation(); // Get the current location object from the router
  return (
    <Flex>
      {/* Sidebar on the left*/}
      {pathname !== "/auth" ? (
        <Box display={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/*  The content on the right*/}
      <Box flex={1} w={{ base: "calc(100% -70px)", md: "calc(100%, -240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
