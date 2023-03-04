import { getAPI } from "@/until/request";

export async function getAPIProducts() {
  const path = "products";
  const data = await getAPI(path);
  return data;
}
