import axios from "axios";

const API = axios.create({
  baseURL: "https://image-generator-mern-backend.vercel.app/api/",
  // baseURL: "https://image-generator-4l8k.onrender.com/api/",
  // baseURL:'http://localhost:8080/api/'
});
//rghjjklk;lssadjlk
export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) =>
  await API.post("/generateImage/", data);
