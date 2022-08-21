import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  return <p>Artigo {id}</p>;
};

export default Article;
