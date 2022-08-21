import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coodesh.com/wp-json/wp/v2/posts",
});

export default api;
