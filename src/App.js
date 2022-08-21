import { Routes, Route } from "react-router-dom";
import Article from "./routes/Article";
import Home from "./routes/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Article />} />
    </Routes>
  );
};

export default App;
