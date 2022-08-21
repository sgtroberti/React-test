import { Button, Flex } from "@chakra-ui/react";

const Navigation = ({ actualPage, maxPage, setActualPage }) => {
  return (
    <Flex justifyContent={"right"} gap={5}>
      <Button
        colorScheme={"red"}
        onClick={() =>
          setActualPage(actualPage > 1 ? actualPage - 1 : actualPage)
        }
      >
        Retornar Página
      </Button>
      <Button colorScheme={"gray"} disabled>
        {actualPage} de {maxPage}
      </Button>
      <Button
        colorScheme={"green"}
        onClick={() =>
          setActualPage(actualPage + 1 > maxPage ? actualPage : actualPage + 1)
        }
      >
        Próxima Página
      </Button>
    </Flex>
  );
};

export default Navigation;
