import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ArticleCard from "../components/ArticleCard";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import api from "../utils/api";

const Home = () => {
  const [posts, setPosts] = useState();
  const [maxPage, setMaxPage] = useState();
  const [actualPage, setActualPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState();
  const [lastRequest, setLastRequest] = useState("normal");
  const { register, handleSubmit, reset } = useForm();

  console.log({ posts, maxPage, actualPage, totalPosts, lastRequest });

  const request = async (
    endpoint = `?page=${actualPage}`,
    search = "normal"
  ) => {
    setPosts(null);
    const data = await api.get(endpoint);
    if (data) {
      setPosts(data.data);
      setMaxPage(data.headers["x-wp-totalpages"]);
      setTotalPosts(data.headers["x-wp-total"]);
      search !== "normal" && setLastRequest(search);
    }
  };

  useEffect(() => {
    lastRequest === "normal"
      ? request()
      : request(`?search=${lastRequest}&page=${actualPage}&orderby=relevance`);
  }, [actualPage]);

  const onSubmit = async (data) => {
    setPosts(null);
    setTotalPosts(0);
    setActualPage(1);
    request(
      `?search=${data.search}&page=${actualPage}&orderby=relevance`,
      data.search
    );
  };

  const handleClear = async () => {
    setPosts(null);
    setTotalPosts(0);
    setActualPage(1);
    setLastRequest("normal");
    reset();
    request();
  };

  return (
    <Layout>
      <Flex
        m={[2, 4, 8]}
        flexDir={["column", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize={[18, 20, 28]} fontWeight={700}>
          Posts
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={[2, 3, 5]} flexDir={["column", "row"]}>
            <Input placeholder={"Pesquisa..."} {...register("search")} />
            <Button type={"submit"} px={[5, 8]} colorScheme={"blue"}>
              Pesquisar
            </Button>
            <Button
              px={[10]}
              variant={"outline"}
              colorScheme={"blue"}
              onClick={handleClear}
            >
              Limpar Pesquisa
            </Button>
          </Flex>
        </form>

        <Navigation
          actualPage={actualPage}
          maxPage={maxPage}
          setActualPage={setActualPage}
        />
      </Flex>
      <Flex m={[2, 4, 8]}>
        <Text>Total de artigos: {totalPosts}</Text>
      </Flex>
      {posts ? (
        posts.map((post) => (
          <ArticleCard
            key={post.id}
            id={post.id}
            date={post.date}
            modified={post.modified}
            title={post.title}
            excerpt={post.excerpt}
          />
        ))
      ) : (
        <Loading />
      )}
      <Flex m={[4, 8]} justifyContent={"right"} alignItems={"center"}>
        <Navigation
          actualPage={actualPage}
          maxPage={maxPage}
          setActualPage={setActualPage}
        />
      </Flex>
    </Layout>
  );
};

export default Home;
