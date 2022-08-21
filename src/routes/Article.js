import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import api from "../utils/api";

const Article = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const request = async () => {
      const response = await api.get(`/${id}`);
      if (response) {
        setPost(response.data);
      }
    };
    request();
  }, [id]);

  console.log(post);

  return post ? (
    <Layout>
      <Flex my={[4, 8]} flexDir={"column"} gap={5} alignItems={"center"}>
        <Text fontSize={[20, 28]} fontWeight={700}>
          {post.title.rendered}
        </Text>

        <a href="./">
          <Button colorScheme={"blue"}>Retornar</Button>
        </a>

        <Flex w={"60%"}>
          <Text
            textAlign={"justify"}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </Flex>
      </Flex>
    </Layout>
  ) : (
    <Loading />
  );
};

export default Article;
