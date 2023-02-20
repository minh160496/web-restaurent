import axios from "axios";

export default function request() {
  return axios.create({
    baseURL: "https://api-his.vercel.app/",
  });
}

export async function getAPI(path) {
  try {
    const res = await request().get(path);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
