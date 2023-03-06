import { getAPI } from "@/until/request";

export default async function getAPIBlogs() {
  const path = "blogs";
  const data = await getAPI(path);
  return data;
}
