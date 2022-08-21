import { Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import { format } from "date-fns";

const ArticleCard = ({ date, modified, title, excerpt, id }) => {
  const created = new Date(date);
  const modifiedDate = new Date(modified);
  const text = excerpt.rendered.split("[&hellip;]")[0];

  return (
    <Box p={[2, 4]} m={[4, 8]} border={"1px solid #ccc"} borderRadius={[4, 8]}>
      <Flex flexDir={"column"} gap={4}>
        <Flex gap={5}>
          <Badge borderRadius="full" px="2" colorScheme="green">
            Adicionado: {format(created, "dd/MM/yyyy")}
          </Badge>
          <Badge borderRadius="full" px="2">
            Modificado: {format(modifiedDate, "dd/MM/yyyy")}
          </Badge>
        </Flex>
        <a href={`/${id}`}>
          <Text p={2} fontWeight={700} fontSize={20}>
            {title.rendered}
          </Text>
        </a>

        <Text px={4} dangerouslySetInnerHTML={{ __html: text + "..." }} />
        <a href={`/${id}`}>
          <Button colorScheme={"linkedin"} w={"20%"} size={"sm"}>
            Ler Mais
          </Button>
        </a>
      </Flex>
    </Box>
  );
};

export default ArticleCard;
