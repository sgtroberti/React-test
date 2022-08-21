import { Button, Flex } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex w="100%" justifyContent={"center"}>
      <Button
        isLoading
        loadingText="Carregando"
        colorScheme="teal"
        variant="outline"
      />
    </Flex>
  );
};

export default Loading;
