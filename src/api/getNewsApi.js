import axios from "axios";

export const getNewsApi = async (path) => {
  try {
    const response = await axios.get(`https://api-berita-indonesia.vercel.app/cnn/${path}/`);
    return response.data;
  } catch (error) {
    return error.message;
  }
};