import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Box w={"80%"}>{children}</Box>
    </Flex>
  );
};

export default Layout;
